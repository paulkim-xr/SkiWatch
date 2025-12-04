"use client";

import { Link } from "react-router-dom";
import { WeatherBadge } from "@/components/weather/WeatherBadge";
import { resortEntries } from "@/lib/resortIndex";
import { useI18n } from "@/lib/i18n/context";
import { strings } from "@/lib/i18n/strings";

export function ResortIndexList() {
  const { t } = useI18n();

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-slate-400">{t(strings.resortPage.heading)}</p>
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">{t(strings.resortPage.listTitle)}</h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">{t(strings.resortPage.listDescription)}</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {resortEntries.map((entry) => (
          <Link
            key={entry.slug}
            to={`/resorts/${entry.slug}`}
            className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm transition hover:border-accent-light/40 dark:border-slate-800/70 dark:bg-slate-900/70"
          >
            <div className="flex items-center justify-between">
              <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{t(entry.resort.name)}</p>
              <WeatherBadge resortSlug={entry.slug} />
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {entry.resort.streams.length} {t(strings.resortPage.webcams)} · {entry.resort.slopes.length} {t(
                strings.resortPage.slopes
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
