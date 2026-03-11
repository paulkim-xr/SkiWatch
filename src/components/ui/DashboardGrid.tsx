import { SortableContext, rectSortingStrategy, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FiMaximize2, FiMinimize2, FiX } from "react-icons/fi";
import { RxDragHandleDots2 } from "react-icons/rx";
import Player from "@/components/ui/Player";
import { cn } from "@/lib/utils";
import { useRef, type PointerEvent as ReactPointerEvent } from "react";
import type { CSSProperties } from "react";

import { DashboardItem } from "@/components/ui/DashboardTypes";
import { WeatherWidget } from "@/components/widgets/WeatherWidget";
import { SlopesWidget } from "@/components/widgets/SlopesWidget";

type DashboardGridProps = {
  items: DashboardItem[];
  onRemove: (id: string) => void;
  onToggleSpan: (id: string) => void;
  onResize: (id: string, colSpan: number, rowSpan: number) => void;
  isDropping?: boolean;
  dropRef?: (node: HTMLDivElement | null) => void;
  isOver?: boolean;
};

export function DashboardGrid({
  items,
  onRemove,
  onToggleSpan,
  onResize,
  isDropping,
  dropRef,
  isOver,
}: DashboardGridProps) {
  const showDropHighlight = Boolean(isOver || isDropping);
  const columns = items.length <= 2 ? 2 : items.length <= 4 ? 2 : 3;
  const rows = Math.max(1, Math.ceil(items.length / columns));

  return (
    <div
      ref={dropRef}
      className={cn(
        "h-full w-full rounded-lg border border-slate-200/70 bg-white/70 p-3 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/60",
        showDropHighlight && "ring-2 ring-accent-light/60 dark:ring-accent-dark/60"
      )}
    >
      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-2 px-3 py-6 text-center text-slate-500 dark:text-slate-300">
          <p className="text-sm font-semibold">No cards in the grid</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Add webcams, weather, or slopes from the list to start your layout. Drag cards to reorder and use the
            expand button for 2-column cards.
          </p>
        </div>
      ) : (
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <div
            className="grid h-full min-h-0 gap-3"
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
            }}
          >
            {items.map((item) => (
              <DashboardGridTile
                key={item.id}
                item={item}
                maxCols={columns}
                maxRows={rows}
                onRemove={() => onRemove(item.id)}
                onToggleSpan={() => onToggleSpan(item.id)}
                onResize={(colSpan, rowSpan) => onResize(item.id, colSpan, rowSpan)}
              />
            ))}
          </div>
        </SortableContext>
      )}
    </div>
  );
}

type DashboardGridTileProps = {
  item: DashboardItem;
  maxCols: number;
  maxRows: number;
  onRemove: () => void;
  onToggleSpan: () => void;
  onResize: (colSpan: number, rowSpan: number) => void;
};

function DashboardGridTile({ item, maxCols, maxRows, onRemove, onToggleSpan, onResize }: DashboardGridTileProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id,
    data: { type: "grid" },
  });
  const tileRef = useRef<HTMLDivElement | null>(null);

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    gridColumn: `span ${item.colSpan}`,
    gridRow: `span ${item.rowSpan}`,
  };

  const handleResizePointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const tile = tileRef.current;
    if (!tile) return;

    const rect = tile.getBoundingClientRect();
    const startX = event.clientX;
    const startY = event.clientY;
    const cellWidth = rect.width / Math.max(1, item.colSpan);
    const cellHeight = rect.height / Math.max(1, item.rowSpan);

    const onMove = (moveEvent: PointerEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;
      const nextCols = Math.max(1, Math.min(maxCols, Math.round((rect.width + deltaX) / cellWidth)));
      const nextRows = Math.max(1, Math.min(maxRows, Math.round((rect.height + deltaY) / cellHeight)));
      if (nextCols !== item.colSpan || nextRows !== item.rowSpan) {
        onResize(nextCols, nextRows);
      }
    };

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  return (
    <div ref={setNodeRef} style={style} className="relative">
      <div
        ref={tileRef}
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
            {item.colSpan > 1 ? <FiMinimize2 className="h-3.5 w-3.5" /> : <FiMaximize2 className="h-3.5 w-3.5" />}
            {item.colSpan > 1 ? "1×1" : "2×1"}
          </button>
        </div>
        <div className="absolute right-2 top-2 z-20 flex items-center gap-1 text-slate-500 dark:text-slate-200">
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
            className="inline-flex items-center gap-1 rounded-md border border-slate-200/60 bg-white/90 px-2 py-1 text-xs font-semibold text-rose-600 shadow-sm backdrop-blur hover:bg-white dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-rose-300"
          >
            <FiX className="h-4 w-4" />
            Remove
          </button>
        </div>
        {item.type === "webcam" && item.stream && (
          <Player stream={item.stream} resortSlug={item.resortSlug} showSummary={false} rounded={false} />
        )}
        {item.type === "weather" && item.resortSlug && (
          <WeatherWidget resortSlug={item.resortSlug} />
        )}
        {item.type === "slopes" && item.resortSlug && (
          <SlopesWidget resortSlug={item.resortSlug} />
        )}
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between bg-gradient-to-t from-black/60 via-black/20 to-transparent px-3 pb-3 pt-10 text-sm font-semibold text-white drop-shadow pointer-events-none">
          <span className="line-clamp-2">{item.label}</span>
        </div>
        <button
          type="button"
          aria-label="Resize tile"
          onPointerDown={handleResizePointerDown}
          className="absolute bottom-1 right-1 z-20 h-5 w-5 cursor-se-resize rounded-sm border border-slate-200/70 bg-white/90 text-slate-500 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/90 dark:text-slate-300"
        >
          ↘
        </button>
      </div>
    </div>
  );
}
