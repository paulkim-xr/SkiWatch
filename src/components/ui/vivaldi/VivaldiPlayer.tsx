import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Stream } from "@/data/Util";
import { useI18n } from "@/lib/i18n/context";
import { strings } from "@/lib/i18n/strings";

const SDK_URL = "https://www.sonohotelsresorts.com/wespJSSDKEncV4.min.js";

declare global {
  interface Window {
    WespJSSDK?: any;
  }
}

type Props = {
  stream: Stream;
};

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

function VivaldiPlayer({ stream }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerId = useMemo(() => `vivaldi-player-${crypto.randomUUID?.() ?? Math.random().toString(36).slice(2)}`, []);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [showRetry, setShowRetry] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const { t } = useI18n();

  const enforceFullSize = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    container.style.setProperty("width", "100%", "important");
    container.style.setProperty("height", "100%", "important");
    container.style.setProperty("maxWidth", "unset");
    container.style.setProperty("maxHeight", "unset");

    const targets = container.querySelectorAll<HTMLElement>("canvas, iframe, video");
    targets.forEach((node) => {
      node.style.setProperty("width", "100%", "important");
      node.style.setProperty("height", "100%", "important");
      node.style.setProperty("maxWidth", "unset");
      node.style.setProperty("maxHeight", "unset");
      node.style.setProperty("objectFit", "contain");
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    enforceFullSize();

    const observer = new MutationObserver(() => {
      enforceFullSize();
    });

    observer.observe(container, { attributes: true, childList: true, subtree: true });

    return () => observer.disconnect();
  }, [enforceFullSize]);

  useEffect(() => {
    let disposed = false;
    let controllerCleanup: (() => void) | undefined;

    async function init() {
      const config = stream.metadata?.vivaldi;
      if (!config) {
        setStatus("error");
        return;
      }

      setStatus("loading");

      try {
        await loadScript(SDK_URL);
      } catch (error) {
        if (!disposed) setStatus("error");
        console.error("[VivaldiPlayer] SDK load error", error);
        return;
      }

      if (!window.WespJSSDK || !containerRef.current || disposed) {
        return;
      }

      try {
        const { Logger, MonitorUIController } = window.WespJSSDK;
        const applyLoggerDefaults =
          typeof Logger?.useDefaults === "function" ? Logger.useDefaults.bind(Logger) : undefined;
        applyLoggerDefaults?.();

        const siteInfo = {
          channel: config.channel,
          serial: config.serial,
          stream: "sub",
          text: config.token ?? "",
        };

        const controller = new MonitorUIController(playerId, siteInfo);
        controllerCleanup = () => controller.dispose();

        controller.init(() => {
          if (disposed) {
            controller.dispose();
            controllerCleanup = undefined;
            return;
          }
          controller.changeLayout(1, siteInfo.channel - 1);
          enforceFullSize();
          setStatus("idle");
        });
      } catch (error) {
        console.error("[VivaldiPlayer] initialization error", error);
        if (!disposed) setStatus("error");
      }
    }

    init();

    return () => {
      disposed = true;
      if (controllerCleanup) {
        controllerCleanup();
        controllerCleanup = undefined;
      }
    };
  }, [stream, playerId, enforceFullSize, reloadKey]);

  useEffect(() => {
    if (status !== "loading") {
      setShowRetry(false);
      return;
    }
    const timer = window.setTimeout(() => setShowRetry(true), 8000);
    return () => window.clearTimeout(timer);
  }, [status]);

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-black">
      <div
        ref={containerRef}
        id={playerId}
        className="h-full w-full overflow-hidden"
      />
      {status === "loading" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/70 px-4 text-center text-white">
          <span className="text-sm font-medium">{t(strings.player.loading)}</span>
          {showRetry && (
            <button
              type="button"
              onClick={() => setReloadKey((key) => key + 1)}
              className="rounded-md bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/50 transition hover:bg-white/20"
            >
              {t(strings.resortPage.retry)}
            </button>
          )}
        </div>
      )}
      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 px-4 text-center text-sm text-red-200">
          {t(strings.player.vivaldiError)}
        </div>
      )}
    </div>
  );
}

export default VivaldiPlayer;
