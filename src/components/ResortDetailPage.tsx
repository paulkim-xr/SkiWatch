import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ResortDetail } from "@/components/resort/ResortDetail";
import { findResortBySlug } from "@/lib/resortIndex";
import { useI18n } from "@/lib/i18n/context";
import { strings } from "@/lib/i18n/strings";

type Params = {
  slug?: string;
};

function ResortDetailPage() {
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
            {t(strings.resortPage.listTitle)}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-auto bg-white/80 dark:bg-slate-900/50 backdrop-blur px-4 py-6 md:px-8">
      <div className="mx-auto max-w-6xl">
        <ResortDetail entry={entry} />
      </div>
    </div>
  );
}

export default ResortDetailPage;
