import SlopeTable from "@/components/ui/SlopeTable";
import { resorts } from "@/data/data";
import { useI18n } from "@/lib/i18n/context";
import { strings } from "@/lib/i18n/strings";

function Slopes() {
  const { t } = useI18n();

  return (
    <section className="flex-1 overflow-auto bg-white/80 dark:bg-slate-900/50 backdrop-blur px-4 py-6 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            {t(strings.slopes.title)}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {t(strings.slopes.description)}
          </p>
        </header>
        <div className="overflow-hidden rounded-xl border border-slate-200/70 dark:border-slate-800/70 bg-white/90 dark:bg-slate-900/80 shadow-sm">
          <SlopeTable resorts={resorts}/>
        </div>
      </div>
    </section>
  );
}

export default Slopes;
