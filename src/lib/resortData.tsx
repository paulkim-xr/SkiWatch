import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import bundledResorts from "@/data/data";
import type { Resort } from "@/data/Util";
import { normalizeJsonResorts } from "@/data/resortJson";
import { createResortIndex, type ResortIndex } from "@/lib/resortIndex";

type ResortDataContextValue = {
  resorts: Resort[];
  resortIndex: ResortIndex;
  source: "bundled" | "remote";
};

const DEFAULT_REMOTE_RESORT_DATA_URL =
  "https://raw.githubusercontent.com/paulkim-xr/SkiWatch/data/resorts.json";

const ResortDataContext = createContext<ResortDataContextValue | null>(null);

type RemoteResortPayload =
  | Resort[]
  | {
      resorts?: Resort[];
    };

function isResortArray(value: unknown): value is Resort[] {
  return Array.isArray(value);
}

function parseRemoteResorts(payload: RemoteResortPayload): Resort[] | null {
  if (isResortArray(payload)) {
    return normalizeJsonResorts(payload);
  }
  if (payload && isResortArray(payload.resorts)) {
    return normalizeJsonResorts(payload.resorts);
  }
  return null;
}

export function ResortDataProvider({ children }: { children: ReactNode }) {
  const [resorts, setResorts] = useState<Resort[]>(bundledResorts);
  const [source, setSource] = useState<"bundled" | "remote">("bundled");
  const remoteUrl =
    (import.meta.env.VITE_RESORT_DATA_URL as string | undefined)?.trim() ||
    DEFAULT_REMOTE_RESORT_DATA_URL;

  useEffect(() => {
    if (!remoteUrl) {
      return;
    }

    const controller = new AbortController();

    const loadRemoteResorts = async () => {
      try {
        const response = await fetch(remoteUrl, {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Failed to load remote resort data: ${response.status}`);
        }

        const payload = (await response.json()) as RemoteResortPayload;
        const nextResorts = parseRemoteResorts(payload);
        if (!nextResorts || nextResorts.length === 0) {
          throw new Error("Remote resort data did not include any resorts");
        }

        setResorts(nextResorts);
        setSource("remote");
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }
        setResorts(bundledResorts);
        setSource("bundled");
      }
    };

    loadRemoteResorts();

    return () => controller.abort();
  }, [remoteUrl]);

  const value = useMemo<ResortDataContextValue>(() => {
    return {
      resorts,
      resortIndex: createResortIndex(resorts),
      source,
    };
  }, [resorts, source]);

  return <ResortDataContext.Provider value={value}>{children}</ResortDataContext.Provider>;
}

export function useResortData() {
  const context = useContext(ResortDataContext);
  if (!context) {
    throw new Error("useResortData must be used within ResortDataProvider");
  }
  return context;
}

export function useResortIndex() {
  return useResortData().resortIndex;
}
