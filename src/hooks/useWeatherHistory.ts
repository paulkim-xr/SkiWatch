"use client";

import { useCallback, useEffect, useState } from "react";
import { buildWeatherApiUrl, withWeatherApiHeaders } from "@/lib/api/weatherClient";

type HistoryMode = "now" | "forecast";

export type WeatherHistorySlot = {
  date: string;
  time: string;
  temperature?: number;
  precipitationType?: number;
  precipitationProbability?: number;
  precipitation?: number;
  precipitationRain?: number;
  precipitationSnow?: number;
  humidity?: number;
  sky?: number;
  windSpeed?: number;
  condition?: string;
  mode: HistoryMode;
};

export type WeatherHistoryMetrics = {
  precipitationTotal?: number;
  snowTotal?: number;
  rainTotal?: number;
  maxWindSpeed?: number;
};

export type WeatherHistoryResult = {
  mode: HistoryMode;
  hours: number;
  metrics?: WeatherHistoryMetrics;
  slots: WeatherHistorySlot[];
};

type WeatherHistoryState = {
  status: "idle" | "loading" | "success" | "error";
  data?: WeatherHistoryResult;
  error?: Error;
  reload: () => void;
};

type CachedEntry = {
  data: WeatherHistoryResult;
  expiresAt: number;
};

type Options = {
  hours?: number;
  mode?: HistoryMode;
  enabled?: boolean;
  cacheMs?: number;
};

const cache = new Map<string, CachedEntry>();
const SNOW_MM_PER_CM = 10;

function makeKey(slug: string, mode: HistoryMode, hours: number) {
  return `${slug}:${mode}:${hours}`;
}

async function fetchHistory(slug: string, mode: HistoryMode, hours: number): Promise<WeatherHistoryResult> {
  const params = new URLSearchParams({
    mode,
    hours: String(hours),
  });
  const url = buildWeatherApiUrl(`weather/${slug}/history?${params.toString()}`);
  const response = await fetch(url, withWeatherApiHeaders({ cache: "no-store" }));
  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(text || `Failed to load weather history (${response.status})`);
  }
  const json = await response.json();
  const slots = Array.isArray(json.slots) ? json.slots : [];
  return {
    mode: (json.mode as HistoryMode) ?? mode,
    hours: json.hours ?? hours,
    metrics: json.metrics
      ? (() => {
          const precipitationTotal = toNumber(json.metrics.precipitationTotal) ?? 0;
          const snowTotal = toNumber(json.metrics.snowTotal) ?? 0;
          const rainTotal =
            toNumber(json.metrics.rainTotal) ??
            Math.max(0, precipitationTotal - snowTotal * SNOW_MM_PER_CM);
          return {
            precipitationTotal,
            snowTotal,
            rainTotal,
            maxWindSpeed: toNumber(json.metrics.maxWindSpeed) ?? 0,
          };
        })()
      : undefined,
    slots: slots.map((slot: any) => ({
      date: slot.fcst_date ?? slot.date ?? "",
      time: slot.fcst_time ?? slot.time ?? "",
      temperature: toNumber(slot.temperature),
      precipitationType: toNumber(slot.precipitation_type),
      precipitationProbability: toNumber(slot.precipitation_probability),
      precipitation: toNumber(slot.precipitation),
      precipitationRain: toNumber(slot.precipitation_rain),
      precipitationSnow: toNumber(slot.precipitation_snow),
      humidity: toNumber(slot.humidity),
      sky: toNumber(slot.sky),
      windSpeed: toNumber(slot.wind_speed),
      condition: slot.condition ?? undefined,
      mode: slot.mode ?? mode,
    })),
  };
}

export function useWeatherHistory(resortSlug?: string, options?: Options): WeatherHistoryState {
  const hours = options?.hours ?? 48;
  const mode = options?.mode ?? "now";
  const enabled = options?.enabled ?? true;
  const cacheMs = options?.cacheMs ?? 5 * 60 * 1000;
  const [status, setStatus] = useState<WeatherHistoryState["status"]>(resortSlug && enabled ? "loading" : "idle");
  const [data, setData] = useState<WeatherHistoryResult>();
  const [error, setError] = useState<Error>();
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    if (!resortSlug || !enabled) {
      setStatus("idle");
      setData(undefined);
      setError(undefined);
      return;
    }

    const key = makeKey(resortSlug, mode, hours);
    const cached = cache.get(key);
    if (cached && cached.expiresAt > Date.now()) {
      setData(cached.data);
      setStatus("success");
      return;
    }

    let cancelled = false;
    setStatus("loading");
    setError(undefined);

    fetchHistory(resortSlug, mode, hours)
      .then((result) => {
        if (cancelled) return;
        cache.set(key, { data: result, expiresAt: Date.now() + cacheMs });
        setData(result);
        setStatus("success");
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err instanceof Error ? err : new Error("Failed to load history"));
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [resortSlug, mode, hours, enabled, cacheMs, nonce]);

  const reload = useCallback(() => {
    if (!resortSlug) return;
    cache.delete(makeKey(resortSlug, mode, hours));
    setNonce((value) => value + 1);
  }, [resortSlug, mode, hours]);

  return {
    status,
    data,
    error,
    reload,
  };
}

function toNumber(value: unknown) {
  if (value === undefined || value === null || value === "") return undefined;
  const num = Number(value);
  return Number.isNaN(num) ? undefined : num;
}
