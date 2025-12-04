import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { WeatherExplorer } from "@/components/resort/WeatherExplorer";
import { ResortWeatherHeader } from "@/components/resort/ResortWeatherHeader";
import { findResortBySlug } from "@/lib/resortIndex";
import { useI18n } from "@/lib/i18n/context";
import { strings } from "@/lib/i18n/strings";

type Params = {
  slug?: string;
};

function ResortWeatherPage() {
  const { slug } = useParams<Params>();
  const navigate = useNavigate();
  const { t } = useI18n();
  const entry = useMemo(() => (slug ? findResortBySlug(slug) : undefined), [slug]);

  if (!entry) {
    return (
      <div className="flex flex-1 items-center justify-center bg-white/80 px-4 py-8 text-sm text-slate-600 dark:bg-slate-900/50 dark:text-slate-300">
        <div className="space-y-3 text-center">
          <p>{t(strings.resortPage.weatherError)}</p>
          <button
            type="button"
            onClick={() => navigate("/resorts")}
            className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {t(strings.resortPage.backToResort)}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-0 overflow-auto bg-slate-50/70 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 md:px-8">
        <ResortWeatherHeader entry={entry} />

        <div className="rounded-3xl border border-slate-200/70 bg-white/95 p-4 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/75 sm:p-6">
          <WeatherExplorer resortSlug={entry.slug} resortName={entry.resort.name} showStandaloneHeader={false} />
        </div>

      </div>
    </div>
  );
}

export default ResortWeatherPage;
