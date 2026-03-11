import { useMemo } from "react";
import { useWeather } from "@/hooks/useWeather";
import { useWeatherHistory } from "@/hooks/useWeatherHistory";
import { useI18n } from "@/lib/i18n/context";
import { strings } from "@/lib/i18n/strings";
import { formatNumber } from "@/lib/utils";
import { ConditionIcon } from "@/components/resort/WeatherExplorer";
import type { ForecastSlot } from "@/lib/weather/forecast";

export function WeatherWidget({ resortSlug }: { resortSlug: string }) {
  const { t } = useI18n();
  const history = useWeatherHistory(resortSlug, { hours: 48, mode: "now" });
  const forecast = useWeather(resortSlug, { mode: "forecast" });

  const hourlySlots = forecast.data?.hourly ?? [];
  const upcoming48Slots = hourlySlots.slice(0, 48);
  
  const upcomingDigest = useMemo(() => summarizeUpcoming48(upcoming48Slots), [upcoming48Slots]);

  if (forecast.status === "loading" || history.status === "loading") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center p-4">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent-light border-t-transparent dark:border-accent-dark" />
      </div>
    );
  }

  if (!upcomingDigest || forecast.error) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center p-4 px-6 text-center">
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
          {t(strings.resortPage.weatherError)}
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-white/90 p-4 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100">
      <div className="flex items-center justify-between mb-4 mt-8">
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {t(strings.resortPage.upcoming48Digest)}
        </h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3 flex-1">
        <div className="flex flex-col justify-center rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t(strings.resortPage.temperature)}</p>
          <p className="text-xl font-semibold">
            {formatNumber(upcomingDigest.minTemp, "°")} / {formatNumber(upcomingDigest.maxTemp, "°")}
          </p>
        </div>
        <div className="flex flex-col justify-center rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t(strings.resortPage.snowTotal)}</p>
          <p className="text-xl font-semibold">{upcomingDigest.snowTotal > 0 ? `${formatNumber(upcomingDigest.snowTotal)} cm` : "—"}</p>
        </div>
        <div className="flex flex-col justify-center rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t(strings.resortPage.rainTotal)}</p>
          <p className="text-xl font-semibold">{upcomingDigest.rainTotal > 0 ? `${formatNumber(upcomingDigest.rainTotal)} mm` : "—"}</p>
        </div>
        <div className="flex flex-col justify-center rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t(strings.resortPage.maxWind)}</p>
          <p className="text-xl font-semibold">{upcomingDigest.maxWind !== undefined ? `${formatNumber(upcomingDigest.maxWind)} m/s` : "—"}</p>
        </div>
      </div>
    </div>
  );
}

function summarizeUpcoming48(slots: ForecastSlot[]) {
  if (!slots.length) return undefined;
  let snowTotal = 0;
  let rainTotal = 0;
  let minTemp: number | undefined;
  let maxTemp: number | undefined;
  let maxWind: number | undefined;

  slots.forEach((slot) => {
    if (slot.precipitationSnow !== undefined) snowTotal += Math.max(0, slot.precipitationSnow);
    if (slot.precipitationRain !== undefined) rainTotal += Math.max(0, slot.precipitationRain);
    
    if (slot.precipitation !== undefined && slot.precipitationSnow === undefined && slot.precipitationRain === undefined) {
      if (slot.precipitationType === 3 || slot.precipitationType === 7) {
        snowTotal += Math.max(0, slot.precipitation) / 10;
      } else {
        rainTotal += Math.max(0, slot.precipitation);
      }
    }
    
    if (slot.temperature !== undefined) {
      if (minTemp === undefined || slot.temperature < minTemp) minTemp = slot.temperature;
      if (maxTemp === undefined || slot.temperature > maxTemp) maxTemp = slot.temperature;
    }
    if (slot.windSpeed !== undefined) {
      if (maxWind === undefined || slot.windSpeed > maxWind) maxWind = slot.windSpeed;
    }
  });

  return { snowTotal, rainTotal, minTemp, maxTemp, maxWind };
}
