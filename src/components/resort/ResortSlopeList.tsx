"use client";

import { useMemo, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Difficulty, Slope } from "@/data/Util";
import { useI18n } from "@/lib/i18n/context";
import { getLocalizedText } from "@/lib/i18n/locales";
import { difficultyLabels, strings } from "@/lib/i18n/strings";

type ResortSlopeListProps = {
  slopes: Slope[];
};

const difficultyOrder: Difficulty[] = [
  Difficulty.BEGINNER,
  Difficulty.BE_IN,
  Difficulty.INTERMEDIATE,
  Difficulty.IN_AD,
  Difficulty.ADVANCED,
  Difficulty.EXPERT,
  Difficulty.PARK,
];

const difficultyColors: Record<Difficulty, string> = {
  [Difficulty.BEGINNER]: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200",
  [Difficulty.BE_IN]: "bg-teal-100 text-teal-800 dark:bg-teal-500/20 dark:text-teal-200",
  [Difficulty.INTERMEDIATE]: "bg-sky-100 text-sky-800 dark:bg-sky-500/20 dark:text-sky-200",
  [Difficulty.IN_AD]: "bg-indigo-100 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-200",
  [Difficulty.ADVANCED]: "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200",
  [Difficulty.EXPERT]: "bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-200",
  [Difficulty.PARK]: "bg-violet-100 text-violet-800 dark:bg-violet-500/20 dark:text-violet-200",
};

export function ResortSlopeList({ slopes }: ResortSlopeListProps) {
  const { locale, t } = useI18n();
  const grouped = useMemo(() => {
    const map = new Map<Difficulty, Slope[]>();
    for (const diff of difficultyOrder) {
      map.set(diff, []);
    }
    slopes.forEach((slope) => {
      const group = map.get(slope.difficulty);
      if (group) {
        group.push(slope);
      } else {
        map.set(slope.difficulty, [slope]);
      }
    });
    return map;
  }, [slopes]);

  const [openDiff, setOpenDiff] = useState<Difficulty | null>(null);

  return (
    <div className="space-y-3">
      {difficultyOrder.map((difficulty) => {
        const list = grouped.get(difficulty)?.map((slope) => ({
          id: slope.id,
          name: getLocalizedText(slope.name, locale),
          length: slope.length,
        }));
        if (!list || list.length === 0) {
          return null;
        }
        const isOpen = openDiff === difficulty;
        const toggle = () => setOpenDiff(isOpen ? null : difficulty);
        const label = getLocalizedText(difficultyLabels[difficulty], locale);
        return (
          <div key={difficulty} className="rounded-2xl border border-slate-200/80 bg-white/90 dark:border-slate-800/70 dark:bg-slate-900/70">
            <button
              type="button"
              onClick={toggle}
              className="flex w-full items-center justify-between px-4 py-3 text-left"
            >
              <div className="flex items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${difficultyColors[difficulty]}`}>
                  {label}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {list.length} {t(strings.resortPage.runs)}
                </span>
              </div>
              {isOpen ? <FiChevronUp className="h-4 w-4" /> : <FiChevronDown className="h-4 w-4" />}
            </button>
            {isOpen && (
              <div className="divide-y divide-slate-100 px-4 dark:divide-slate-800">
            {list.map((slope) => (
              <div key={slope.id} className="flex flex-col gap-1 py-3 text-sm text-slate-700 dark:text-slate-200 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-medium">{slope.name}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {slope.length ? `${Math.round(slope.length).toLocaleString()} m` : "—"}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
        );
      })}
    </div>
  );
}
