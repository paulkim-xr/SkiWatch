"use client";

import { FiAlertTriangle, FiCloud, FiCloudDrizzle, FiCloudRain, FiCloudSnow, FiLoader, FiSun, FiWind } from "react-icons/fi";
import { useWeather } from "@/hooks/useWeather";
import { useInViewport } from "@/hooks/useInViewport";
import { WeatherCondition } from "@/lib/weather/forecast";
import { cn } from "@/lib/utils";

type WeatherBadgeProps = {
  resortSlug?: string;
  className?: string;
  priority?: boolean;
};

function iconForCondition(condition: WeatherCondition) {
  switch (condition) {
    case "clear":
      return FiSun;
    case "snow":
      return FiCloudSnow;
    case "rain":
      return FiCloudRain;
    case "mixed":
      return FiCloudDrizzle;
    case "cloudy":
    case "overcast":
      return FiCloud;
    default:
      return FiCloud;
  }
}

export function WeatherBadge({ resortSlug, className, priority = false }: WeatherBadgeProps) {
  const { ref, inView } = useInViewport<HTMLSpanElement>({ rootMargin: "200px", once: true });
  const shouldFetch = priority || inView;
  const { status, data } = useWeather(resortSlug, { mode: "now", enabled: shouldFetch });

  if (!resortSlug) {
    return null;
  }

  if (!shouldFetch) {
    return <span ref={ref} className={cn("inline-flex items-center text-slate-300", className)} />;
  }

  if (status === "loading") {
    return (
      <span ref={ref} className={cn("inline-flex items-center text-slate-400", className)}>
        <FiLoader className="h-4 w-4 animate-spin" aria-hidden />
      </span>
    );
  }

  if (status === "error" || !data) {
    return (
      <span ref={ref} className={cn("inline-flex items-center text-red-400", className)} title="Weather unavailable">
        <FiAlertTriangle className="h-4 w-4" aria-hidden />
        <span className="sr-only">Weather unavailable</span>
      </span>
    );
  }

  const Icon = iconForCondition(data.summary.condition);
  const temp = data.summary.temperature;
  const wind = data.summary.windSpeed;
  return (
    <span ref={ref} className={cn("inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-300", className)}>
      <Icon className="h-4 w-4" aria-hidden />
      <span className="flex items-center gap-1">
        {typeof temp === "number" ? <span>{temp.toFixed(1)}°C</span> : <span>{data.summary.label}</span>}
        {typeof wind === "number" && (
          <span className="inline-flex items-center gap-0.5 text-[11px] text-slate-400 dark:text-slate-400">
            <FiWind className="h-3 w-3" aria-hidden />
            {wind.toFixed(1)} m/s
          </span>
        )}
      </span>
    </span>
  );
}
