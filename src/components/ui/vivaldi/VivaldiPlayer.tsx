import { useEffect, useMemo, useRef, useState } from "react";
import { Stream } from "@/data/Util";

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
        await loadScript("./wespJSSDKEncV4.min.js");
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
        Logger.useDefaults();

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
  }, [stream, playerId]);

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-black">
      <div
        ref={containerRef}
        id={playerId}
        className="h-full w-full overflow-hidden"
      />
      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white">
          <span className="text-sm font-medium">로딩 중...</span>
        </div>
      )}
      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 px-4 text-center text-sm text-red-200">
          비발디 웹캠을 불러오는 중 오류가 발생했습니다.
        </div>
      )}
    </div>
  );
}

export default VivaldiPlayer;
