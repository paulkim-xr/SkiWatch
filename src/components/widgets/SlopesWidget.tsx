import { useMemo } from "react";
import { useI18n } from "@/lib/i18n/context";
import { strings, difficultyLabels } from "@/lib/i18n/strings";
import { getLocalizedText } from "@/lib/i18n/locales";
import { Difficulty } from "@/data/Util";
import { useResortIndex } from "@/lib/resortData";
import { cn } from "@/lib/utils";

const difficultyColors: Record<Difficulty, string> = {
  [Difficulty.BEGINNER]: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-100",
  [Difficulty.BE_IN]: "bg-teal-100 text-teal-800 dark:bg-teal-500/20 dark:text-teal-100",
  [Difficulty.INTERMEDIATE]: "bg-sky-100 text-sky-800 dark:bg-sky-500/20 dark:text-sky-100",
  [Difficulty.IN_AD]: "bg-indigo-100 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-100",
  [Difficulty.ADVANCED]: "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-100",
  [Difficulty.EXPERT]: "bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-100",
  [Difficulty.PARK]: "bg-violet-100 text-violet-800 dark:bg-violet-500/20 dark:text-violet-100",
};

export function SlopesWidget({ resortSlug }: { resortSlug: string }) {
  const { t, locale } = useI18n();
  const { findResortBySlug } = useResortIndex();
  const entry = useMemo(() => findResortBySlug(resortSlug), [findResortBySlug, resortSlug]);

  if (!entry) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center p-4">
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
          {t(strings.slopes.description)} Unavailable
        </p>
      </div>
    );
  }

  const { resort } = entry;
  
  const stats = useMemo(() => {
    let totalLength = 0;
    const diffCounts: Record<Difficulty, number> = {
      [Difficulty.BEGINNER]: 0,
      [Difficulty.BE_IN]: 0,
      [Difficulty.INTERMEDIATE]: 0,
      [Difficulty.IN_AD]: 0,
      [Difficulty.ADVANCED]: 0,
      [Difficulty.EXPERT]: 0,
      [Difficulty.PARK]: 0,
    };
    
    resort.slopes.forEach(slope => {
      if (slope.length) totalLength += slope.length;
      diffCounts[slope.difficulty]++;
    });
    
    return {
      totalSlopes: resort.slopes.length,
      totalLengthKm: (totalLength / 1000).toFixed(1),
      diffCounts
    };
  }, [resort.slopes]);

  const topDifficulties = Object.entries(stats.diffCounts)
    .filter(([_, count]) => count > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([diff]) => parseInt(diff) as Difficulty);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-white/90 p-5 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100">
      <div className="flex items-center justify-between mb-4 mt-8">
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {t(strings.nav.slopes)}
        </h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex flex-col justify-center rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Total Slopes</p>
          <p className="text-2xl font-semibold">{stats.totalSlopes}</p>
        </div>
        <div className="flex flex-col justify-center rounded-xl bg-slate-50 p-3 dark:bg-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Total Length</p>
          <p className="text-2xl font-semibold">{stats.totalLengthKm} km</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {topDifficulties.map(diff => (
          <span 
            key={diff}
            className={cn(
              "inline-flex rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide",
              difficultyColors[diff]
            )}
          >
            {getLocalizedText(difficultyLabels[diff], locale)}: {stats.diffCounts[diff]}
          </span>
        ))}
        {topDifficulties.length < Object.keys(stats.diffCounts).filter(k => stats.diffCounts[k as any as Difficulty] > 0).length && (
          <span className="inline-flex rounded-full px-2 py-1 text-[10px] font-semibold bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            +{Object.keys(stats.diffCounts).filter(k => stats.diffCounts[k as any as Difficulty] > 0).length - 3} more
          </span>
        )}
      </div>
    </div>
  );
}
