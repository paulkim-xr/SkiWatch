"use client";

import { useCallback, useEffect, useState } from "react";
import { buildWeatherApiUrl, withWeatherApiHeaders } from "@/lib/api/weatherClient";

export type MidRangeDayPart = {
  weather?: string;
  precipitationChance?: number;
};

export type MidRangeDay = {
  dayOffset: number;
  date?: string;
  am?: MidRangeDayPart;
  pm?: MidRangeDayPart;
  allDay?: MidRangeDayPart;
  min?: number;
  minLow?: number;
  minHigh?: number;
  max?: number;
  maxLow?: number;
  maxHigh?: number;
};

export type MidRangeSummary = {
  baseDate?: string;
  baseTime?: string;
  tmFc?: string;
  regId?: string;
  days: MidRangeDay[];
};

export type MidRangeOverview = {
  stnId?: string;
  tmFc?: string;
  forecast: string;
};

export type MidRangeResult = {
  overview?: MidRangeOverview;
  land?: MidRangeSummary;
  temperature?: MidRangeSummary;
  shortTerm?: MidRangeSummary;
  tmFc?: string;
};

type MidRangeState = {
  status: "idle" | "loading" | "success" | "error";
  data?: MidRangeResult;
  error?: Error;
  reload: () => void;
};

type CachedEntry = {
  data: MidRangeResult;
  expiresAt: number;
  tmFc?: string;
};

const cache = new Map<string, CachedEntry>();
const inflight = new Map<string, Promise<MidRangeResult | undefined>>();

async function fetchMidRange(slug: string): Promise<MidRangeResult> {
  const url = buildWeatherApiUrl(`midrange/${slug}`);
  const response = await fetch(url, withWeatherApiHeaders({ cache: "no-store" }));
  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(text || `Failed to load mid-range forecast (${response.status})`);
  }
  return normalize(await response.json());
}

function normalize(payload: any): MidRangeResult {
  const tmFc =
    payload?.overview?.summary?.tmFc ??
    payload?.overview?.tmFc ??
    payload?.land?.summary?.tmFc ??
    payload?.land?.tmFc ??
    payload?.temperature?.summary?.tmFc ??
    payload?.temperature?.tmFc;
  return {
    overview: payload.overview
      ? {
          stnId: payload.overview.summary?.stnId ?? payload.overview.stnId,
          tmFc: payload.overview.summary?.tmFc ?? payload.overview.tmFc,
          forecast: payload.overview.summary?.forecast ?? payload.overview.forecast ?? "",
        }
      : undefined,
    land: payload.land ? normalizeSummary(payload.land) : undefined,
    temperature: payload.temperature ? normalizeSummary(payload.temperature) : undefined,
    shortTerm: payload.shortTerm ? normalizeSummary(payload.shortTerm) : undefined,
    tmFc,
  };
}

function normalizeSummary(entry: any): MidRangeSummary {
  const sourceDays = entry.summary?.days ?? entry.days ?? [];
  return {
    baseDate: entry.baseDate,
    baseTime: entry.baseTime,
    tmFc: entry.summary?.tmFc ?? entry.tmFc,
    regId: entry.summary?.regId ?? entry.regId,
    days: Array.isArray(sourceDays) ? sourceDays : [],
  };
}

export function useMidRange(resortSlug?: string): MidRangeState {
  const [status, setStatus] = useState<MidRangeState["status"]>(resortSlug ? "loading" : "idle");
  const [data, setData] = useState<MidRangeResult>();
  const [error, setError] = useState<Error>();
  const [nonce, setNonce] = useState(0);

  const fetchAndUpdate = useCallback(async (): Promise<MidRangeResult | undefined> => {
    if (!resortSlug) return undefined;
    const key = resortSlug;
    if (inflight.has(key)) {
      return inflight.get(key);
    }
    const promise = fetchMidRange(resortSlug)
      .then((result) => {
        cache.set(key, {
          data: result,
          expiresAt: Date.now() + 60 * 60 * 1000,
          tmFc: result.tmFc,
        });
        setData(result);
        setStatus("success");
        setError(undefined);
        return result;
      })
      .catch((err) => {
        setError(err instanceof Error ? err : new Error("Failed to load mid-range forecast"));
        setStatus("error");
        throw err;
      })
      .finally(() => {
        inflight.delete(key);
      });
    inflight.set(key, promise);
    return promise;
  }, [resortSlug]);

  useEffect(() => {
    if (!resortSlug) {
      setStatus("idle");
      setData(undefined);
      setError(undefined);
      return;
    }

    const cached = cache.get(resortSlug);
    if (cached && cached.expiresAt > Date.now()) {
      setData(cached.data);
      setStatus("success");
      setError(undefined);
      // Revalidate in background in case a new tmFc is available.
      fetchAndUpdate()
        .then((result) => {
          if (!result) return;
          if (cached.tmFc && result.tmFc && cached.tmFc === result.tmFc) {
            return;
          }
          setData(result);
        })
        .catch(() => {
          /* keep cached data */
        });
      return;
    }

    let cancelled = false;
    setStatus("loading");
    setError(undefined);

    fetchAndUpdate().catch(() => {
      if (cancelled) return;
      setStatus("error");
    });

    return () => {
      cancelled = true;
    };
  }, [resortSlug, nonce, fetchAndUpdate]);

  const reload = useCallback(() => {
    if (!resortSlug) return;
    cache.delete(resortSlug);
    inflight.delete(resortSlug);
    setNonce((value) => value + 1);
  }, [resortSlug]);

  return {
    status,
    data,
    error,
    reload,
  };
}
