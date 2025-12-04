"use client";

import { useCallback, useEffect, useState } from "react";
import { fetchWeatherApi } from "@/lib/api/weatherClient";

export type AirQualityDailyBulletin = {
  dataTime?: string;
  forecastDate?: string;
  gradeForResort?: string;
  summary?: {
    informCode?: string;
    informData?: string;
    informOverall?: string;
    informCause?: string;
    actionKnack?: string;
    images?: string[];
    regionGrades?: Record<string, string>;
  };
};

export type AirQualityWeeklyForecast = {
  label?: string;
  date?: string;
  gradeForResort?: string;
  reliability?: string;
  };

export type AirQualityWeeklyBulletin = {
  dataTime?: string;
  forecastDate?: string;
  summary?: {
    presentationDate?: string;
    outlook?: string;
    forecasts?: AirQualityWeeklyForecast[];
  };
};

export type AirQualityResult = {
  resort?: { slug: string; name: string };
  daily?: {
    pm10?: AirQualityDailyBulletin | null;
    pm25?: AirQualityDailyBulletin | null;
  };
  weekly?: AirQualityWeeklyBulletin | null;
};

type Status = "idle" | "loading" | "success" | "error";

type CachedEntry = {
  data: AirQualityResult;
  expiresAt: number;
};

const cache = new Map<string, CachedEntry>();

export function useAirQuality(resortSlug?: string, options?: { enabled?: boolean; cacheMs?: number }) {
  const enabled = options?.enabled ?? true;
  const cacheMs = options?.cacheMs ?? 10 * 60 * 1000;
  const [status, setStatus] = useState<Status>(resortSlug && enabled ? "loading" : "idle");
  const [data, setData] = useState<AirQualityResult>();
  const [error, setError] = useState<Error>();
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    if (!resortSlug || !enabled) {
      setStatus("idle");
      setData(undefined);
      setError(undefined);
      return;
    }

    const cached = cache.get(resortSlug);
    if (cached && cached.expiresAt > Date.now()) {
      setData(cached.data);
      setStatus("success");
      return;
    }

    let cancelled = false;
    setStatus("loading");
    setError(undefined);

    fetchWeatherApi(`air-quality/${resortSlug}`, { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) {
          const text = await response.text().catch(() => "");
          throw new Error(text || `Failed to load air quality (${response.status})`);
        }
        return response.json() as Promise<AirQualityResult>;
      })
      .then((payload) => {
        if (cancelled) return;
        cache.set(resortSlug, { data: payload, expiresAt: Date.now() + cacheMs });
        setData(payload);
        setStatus("success");
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err instanceof Error ? err : new Error("Failed to load air quality"));
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [resortSlug, enabled, cacheMs, nonce]);

  const reload = useCallback(() => {
    if (!resortSlug) return;
    cache.delete(resortSlug);
    setNonce((value) => value + 1);
  }, [resortSlug]);

  return { status, data, error, reload };
}
