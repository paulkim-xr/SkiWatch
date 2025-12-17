import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { closestCenter, DndContext, DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { Resort, Stream, StreamType } from "@/data/Util";
import { resorts } from "@/data/data";
import Sidebar from "@/components/ui/Sidebar";
import Player from "@/components/ui/Player";
import { WebcamGrid, type WebcamGridItem } from "@/components/ui/WebcamGrid";
import { useI18n } from "@/lib/i18n/context";
import { createText } from "@/lib/i18n/locales";
import { findStreamBySlugs, getResortSlug, getRouteForStream } from "@/lib/resortIndex";
import { cn } from "@/lib/utils";

type WebcamParams = {
  resort?: string;
  stream?: string;
};

function Webcam() {
  const params = useParams<WebcamParams>();
  const navigate = useNavigate();
  const { t } = useI18n();
  const [currentStream, setCurrentStream] = useState<Stream | undefined>();
  const [selectedStreamId, setSelectedStreamId] = useState<string | undefined>();
  const [selectedResortHomepage, setSelectedResortHomepage] = useState<string | undefined>();
  const [selectedResortSlug, setSelectedResortSlug] = useState<string | undefined>();
  const [selectedResortName, setSelectedResortName] = useState<Resort["name"] | undefined>();
  const [selectionToken, setSelectionToken] = useState(1);
  const [shouldSyncSelection, setShouldSyncSelection] = useState(true);
  const [gridItems, setGridItems] = useState<WebcamGridItem[]>([]);
  const [isPointerDragging, setIsPointerDragging] = useState(false);
  const [viewMode, setViewMode] = useState<"single" | "grid">("single");
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor)
  );
  const gridDropId = "webcam-grid-drop";
  const gridIds = useMemo(() => gridItems.map((item) => item.id), [gridItems]);

  const gridText = {
    title: createText({ ko: "그리드 보기", en: "Grid view", ja: "グリッド表示" }),
    hint: createText({
      ko: "타일을 드래그해서 순서를 바꾸고, 확장 버튼으로 2칸을 차지하게 만들 수 있어요.",
      en: "Drag tiles to reorder; use the expand button to let a webcam span two cells.",
      ja: "タイルをドラッグして並び替え、拡大ボタンで2マス分にできます。",
    }),
    add: createText({ ko: "그리드에 추가", en: "Add to grid", ja: "グリッドに追加" }),
    clear: createText({ ko: "전체 비우기", en: "Clear grid", ja: "グリッドを空にする" }),
  };

  useEffect(() => {
    if (params.resort && params.stream) {
      const found = findStreamBySlugs(params.resort, params.stream);
      if (found) {
        setCurrentStream(found.stream);
        setSelectedStreamId(found.streamId);
        setSelectedResortHomepage(found.resort.homepage);
        setSelectedResortSlug(found.resortSlug);
        setSelectedResortName(found.resort.name);
        setShouldSyncSelection(true);
        setSelectionToken((token) => token + 1);
        return;
      }
    }
    setShouldSyncSelection(false);
    setSelectedStreamId(undefined);
    setSelectedResortHomepage(undefined);
    setSelectedResortSlug(undefined);
    setSelectedResortName(undefined);
    setSelectionToken((token) => token + 1);
    setCurrentStream(undefined);
  }, [params.resort, params.stream]);

  const handleStreamSelect = (
    stream: Stream,
    meta: { resort: Resort; streamId: string; shouldSyncSidebar: boolean; resortSlug?: string }
  ) => {
    setCurrentStream(stream);
    setSelectedStreamId(meta.streamId);
    setSelectedResortHomepage(meta.resort.homepage);
    setSelectedResortSlug(meta.resortSlug ?? getResortSlug(meta.resort));
    setSelectedResortName(meta.resort.name);
    setShouldSyncSelection(meta.shouldSyncSidebar !== false);
    setSelectionToken((token) => token + 1);

    const route = getRouteForStream(meta.resort, stream);
    if (route) {
      navigate(`/webcams/${route.resortSlug}/${route.streamSlug}`);
    } else {
      navigate("/");
    }
  };

  const fallbackStream: Stream = {
    name: createText({ ko: "선택된 영상이 없습니다", en: "No stream selected" }),
    type: StreamType.Unavailable,
    url: "",
  };

  const handleAddToGrid = () => {
    if (!currentStream || !selectedStreamId) return;
    setGridItems((items) => {
      if (items.some((item) => item.id === selectedStreamId)) return items;
      return [
        ...items,
        {
          id: selectedStreamId,
          stream: currentStream,
          resortSlug: selectedResortSlug,
          label: selectedResortName ? `${t(selectedResortName)} · ${t(currentStream.name)}` : t(currentStream.name),
          span: 1,
        },
      ];
    });
  };

  const handleRemoveFromGrid = (id: string) => {
    setGridItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleSpan = (id: string) => {
    setGridItems((items) =>
      items.map((item) => (item.id === id ? { ...item, span: item.span === 2 ? 1 : 2 } : item))
    );
  };

  const handleClearGrid = () => setGridItems([]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setIsPointerDragging(false);
    if (!over) return;

    const activeType = active.data.current?.type;
    if (activeType === "grid") {
      if (active.id === over.id) return;
      const oldIndex = gridIds.findIndex((id) => id === active.id);
      const newIndex = gridIds.findIndex((id) => id === over.id);
      if (oldIndex === -1 || newIndex === -1) return;
      setGridItems((items) => arrayMove(items, oldIndex, newIndex));
      return;
    }

    if (activeType === "stream" && (over.id === gridDropId || gridIds.includes(String(over.id)))) {
      const payload = active.data.current?.payload as {
        stream: Stream;
        resort: Resort;
        streamId: string;
        resortSlug?: string;
      };
      if (!payload) return;
      setCurrentStream(payload.stream);
      setSelectedStreamId(payload.streamId);
      setSelectedResortHomepage(payload.resort.homepage);
      setSelectedResortSlug(payload.resortSlug ?? getResortSlug(payload.resort));
      setSelectedResortName(payload.resort.name);

      setGridItems((items) => {
        if (items.some((item) => item.id === payload.streamId)) return items;
        return [
          ...items,
          {
            id: payload.streamId,
            stream: payload.stream,
            resortSlug: payload.resortSlug ?? getResortSlug(payload.resort),
            label: `${t(payload.resort.name)} · ${t(payload.stream.name)}`,
            span: 1,
          },
        ];
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={() => setIsPointerDragging(true)}
      onDragCancel={() => setIsPointerDragging(false)}
      onDragEnd={handleDragEnd}
    >
      <div className="flex h-full w-full flex-col overflow-hidden bg-white/70 text-slate-900 backdrop-blur dark:bg-slate-900/40 dark:text-white">
        <div className="flex flex-1 min-h-0 flex-col gap-4 p-3 md:flex-row md:items-start md:p-4 md:pr-3 overflow-hidden">
          <div className="order-1 flex min-h-0 w-full flex-1 flex-col gap-3 overflow-y-auto">
            {viewMode === "single" && (
              <div className="overflow-hidden rounded-xl border border-slate-200/70 bg-white/80 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/70">
                <Player stream={currentStream ?? fallbackStream} resortSlug={selectedResortSlug} rounded={false} />
              </div>
            )}

            {viewMode === "grid" && (
              <div className="flex flex-col gap-2 rounded-xl border border-slate-200/70 bg-white/80 p-3 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/70">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{t(gridText.title)}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t(gridText.hint)}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={handleAddToGrid}
                      disabled={!currentStream || !selectedStreamId}
                      className="inline-flex items-center gap-2 rounded-md bg-accent-light px-3 py-2 text-sm font-semibold text-white shadow hover:bg-accent-light/90 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-accent-dark dark:hover:bg-accent-dark/90"
                    >
                      {t(gridText.add)}
                    </button>
                    <button
                      type="button"
                      onClick={handleClearGrid}
                      disabled={gridItems.length === 0}
                      className="inline-flex items-center gap-2 rounded-md border border-slate-200/80 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
                    >
                      {t(gridText.clear)}
                    </button>
                  </div>
                </div>
                <WebcamGrid
                  items={gridItems}
                  droppableId={gridDropId}
                  onRemove={handleRemoveFromGrid}
                  onToggleSpan={handleToggleSpan}
                  isDropping={isPointerDragging}
                />
              </div>
            )}
          </div>

          <div className="order-2 relative w-full shrink-0 min-h-0 md:w-[320px] lg:w-[360px] flex h-full">
            <Sidebar
              data={resorts}
              onStreamSelect={handleStreamSelect}
              selectedStreamId={selectedStreamId}
              selectedResortHomepage={selectedResortHomepage}
              selectionToken={selectionToken}
              shouldSyncSelection={shouldSyncSelection}
            />
            <div className="pointer-events-auto absolute inset-x-3 bottom-3 z-30">
              <div className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/95 p-1.5 shadow-lg backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/95">
                <button
                  type="button"
                  onClick={() => setViewMode("single")}
                  className={cn(
                    "flex-1 rounded-full px-3 py-2 text-sm font-semibold transition",
                    viewMode === "single"
                      ? "bg-accent-light text-white shadow-sm dark:bg-accent-dark"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  )}
                >
                  {t(createText({ ko: "단일 보기", en: "Single view", ja: "シングルビュー" }))}
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "flex-1 rounded-full px-3 py-2 text-sm font-semibold transition",
                    viewMode === "grid"
                      ? "bg-accent-light text-white shadow-sm dark:bg-accent-dark"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  )}
                >
                  {t(createText({ ko: "그리드 보기", en: "Grid view", ja: "グリッドビュー" }))}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DndContext>
  );
}

export default Webcam;
