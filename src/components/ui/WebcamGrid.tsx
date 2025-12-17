import { useDroppable } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FiMaximize2, FiMinimize2, FiX } from "react-icons/fi";
import { RxDragHandleDots2 } from "react-icons/rx";
import Player from "@/components/ui/Player";
import { Stream } from "@/data/Util";
import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

export type WebcamGridItem = {
  id: string;
  stream: Stream;
  resortSlug?: string;
  label: string;
  span: 1 | 2;
};

type WebcamGridProps = {
  items: WebcamGridItem[];
  droppableId: string;
  onRemove: (id: string) => void;
  onToggleSpan: (id: string) => void;
  isDropping?: boolean;
};

export function WebcamGrid({ items, droppableId, onRemove, onToggleSpan, isDropping }: WebcamGridProps) {
  const { setNodeRef, isOver } = useDroppable({ id: droppableId });
  const showDropHighlight = isOver || isDropping;

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "w-full rounded-lg border border-slate-200/70 bg-white/70 p-3 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/60",
        showDropHighlight && "ring-2 ring-accent-light/60 dark:ring-accent-dark/60"
      )}
    >
      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-2 px-3 py-6 text-center text-slate-500 dark:text-slate-300">
          <p className="text-sm font-semibold">No webcams in the grid</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Select a webcam and click “Add to grid” to start building your layout. Drag tiles to reorder; use the
            expand button to let a webcam span two columns.
          </p>
        </div>
      ) : (
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <div className="grid auto-rows-[220px] gap-3 md:auto-rows-[260px] xl:auto-rows-[320px] [grid-template-columns:repeat(auto-fill,minmax(240px,1fr))]">
            {items.map((item) => (
              <WebcamGridTile
                key={item.id}
                item={item}
                onRemove={() => onRemove(item.id)}
                onToggleSpan={() => onToggleSpan(item.id)}
              />
            ))}
          </div>
        </SortableContext>
      )}
    </div>
  );
}

type WebcamGridTileProps = {
  item: WebcamGridItem;
  onRemove: () => void;
  onToggleSpan: () => void;
};

function WebcamGridTile({ item, onRemove, onToggleSpan }: WebcamGridTileProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id,
    data: { type: "grid" },
  });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    gridColumn: item.span === 2 ? "span 2" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative">
      <div
        className={cn(
          "group relative h-full w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100/80 shadow-sm ring-0 backdrop-blur transition hover:ring-2 hover:ring-accent-light/50 dark:border-slate-800/80 dark:bg-slate-800/50 dark:hover:ring-accent-dark/60",
          isDragging && "z-30 scale-[1.01] ring-2 ring-accent-light/70 dark:ring-accent-dark/80"
        )}
      >
        <div className="absolute left-2 top-2 z-20 flex items-center gap-1">
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-md border border-slate-200/60 bg-white/90 px-2 py-1 text-[11px] font-semibold text-slate-600 shadow-sm backdrop-blur hover:bg-white dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200"
            onClick={onToggleSpan}
          >
            {item.span === 2 ? <FiMinimize2 className="h-3.5 w-3.5" /> : <FiMaximize2 className="h-3.5 w-3.5" />}
            {item.span === 2 ? "1×1" : "2×1"}
          </button>
        </div>
        <div className="absolute right-2 top-2 z-20 flex items-center gap-1 text-slate-500 opacity-0 transition-opacity group-hover:opacity-100 dark:text-slate-200">
          <button
            type="button"
            aria-label="Drag to reorder"
            className="inline-flex items-center justify-center rounded-md border border-slate-200/60 bg-white/90 p-2 shadow-sm backdrop-blur hover:bg-white dark:border-slate-700/70 dark:bg-slate-900/80"
            {...attributes}
            {...listeners}
          >
            <RxDragHandleDots2 className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Remove from grid"
            onClick={onRemove}
            className="inline-flex items-center justify-center rounded-md border border-slate-200/60 bg-white/90 p-2 text-rose-500 shadow-sm backdrop-blur hover:bg-white dark:border-slate-700/70 dark:bg-slate-900/80"
          >
            <FiX className="h-4 w-4" />
          </button>
        </div>
        <Player stream={item.stream} resortSlug={item.resortSlug} showSummary={false} rounded={false} />
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between bg-gradient-to-t from-black/60 via-black/20 to-transparent px-3 pb-3 pt-10 text-sm font-semibold text-white drop-shadow">
          <span className="line-clamp-2">{item.label}</span>
        </div>
      </div>
    </div>
  );
}
