import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import { Resort, Stream, StreamType } from "@/data/Util";
import { useI18n } from "@/lib/i18n/context";
import { strings } from "@/lib/i18n/strings";
import { cn } from "@/lib/utils";

type SidebarProps = {
  data: Resort[];
  onStreamSelect: (stream: Stream) => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
};

function Sidebar({ data, onStreamSelect, isCollapsed = false, onToggleCollapse }: SidebarProps) {
  const [currentResort, setCurrentResort] = useState<Resort | undefined>();
  const [selectedStream, setSelectedStream] = useState<Stream | undefined>();
  const { t } = useI18n();

  const listRefs = useRef<Record<string, HTMLUListElement | null>>({});

  const collapseEnabled = typeof onToggleCollapse === "function";
  const collapsed = collapseEnabled ? isCollapsed : false;

  function resortSelected(resort: Resort) {
    setCurrentResort((prev) => (prev === resort ? undefined : resort));
  }

  useEffect(() => {
    Object.entries(listRefs.current).forEach(([key, element]) => {
      if (!element) return;

      const isActive = !collapsed && currentResort?.homepage === key;

      if (isActive) {
        element.style.maxHeight = `${element.scrollHeight}px`;
        element.style.opacity = "1";
        element.style.pointerEvents = "auto";
        element.style.borderColor = "";
      } else {
        element.style.maxHeight = "0px";
        element.style.opacity = "0";
        element.style.pointerEvents = "none";
        element.style.borderColor = "transparent";
      }
    });
  }, [currentResort, collapsed]);

  return (
    <aside
      className={cn(
        "w-full flex flex-1 md:flex-none flex-col min-h-0 border-t border-slate-200/70 md:border-t-0 md:border-l dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70 backdrop-blur md:h-full h-full transition-[width] duration-300 overflow-y-auto md:overflow-hidden",
        collapseEnabled ? (collapsed ? "md:w-12" : "md:w-80") : "md:w-80"
      )}
    >
      {collapseEnabled && (
        <div className="hidden md:flex justify-end px-3 pt-3">
          <button
            type="button"
            onClick={onToggleCollapse}
            aria-label={collapsed ? t(strings.sidebar.expand) : t(strings.sidebar.collapse)}
            aria-pressed={!collapsed}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-300/70 bg-white/90 text-slate-600 transition-colors hover:bg-slate-200 dark:border-slate-600/70 dark:bg-slate-800/80 dark:text-slate-100 dark:hover:bg-slate-700"
          >
            {collapsed ? <FiChevronLeft className="h-4 w-4" /> : <FiChevronRight className="h-4 w-4" />}
          </button>
        </div>
      )}

      {!collapseEnabled || !collapsed ? (
        <div className="flex-1 overflow-y-auto min-h-0">
          <ul className="space-y-1.5 py-4">
            {data.map((resort) => {
              const isActiveResort = !collapsed && currentResort === resort;
              const hasSelectedStream = selectedStream ? resort.streams.includes(selectedStream) : false;

              return (
                <li key={resort.homepage} className="px-4">
                  <button
                    className={cn(
                      "flex w-full items-center justify-between rounded-md border border-transparent px-3 py-2 text-left text-sm font-semibold transition-colors",
                      isActiveResort
                        ? "bg-slate-200/80 text-slate-900 dark:bg-slate-800/70 dark:text-slate-100"
                        : hasSelectedStream
                          ? "border-accent-light/70 bg-accent-light/10 text-slate-800 dark:border-accent-dark/60 dark:bg-accent-dark/10 dark:text-slate-100"
                          : "text-slate-600 hover:border-slate-300 hover:bg-slate-100 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800/60"
                    )}
                    onClick={() => resortSelected(resort)}
                    aria-expanded={isActiveResort}
                    aria-controls={`resort-${resort.homepage}-streams`}
                  >
                    <span>{t(resort.name)}</span>
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {isActiveResort ? t(strings.sidebar.collapse) : t(strings.sidebar.expand)}
                    </span>
                  </button>

                  <ul
                    id={`resort-${resort.homepage}-streams`}
                    ref={(node) => {
                      if (node) {
                        listRefs.current[resort.homepage] = node;
                      } else {
                        delete listRefs.current[resort.homepage];
                      }
                    }}
                    className="mt-1 max-h-0 rounded-lg border border-slate-200/80 dark:border-slate-800/70 bg-white/80 dark:bg-slate-900/80 overflow-hidden transition-[max-height,opacity] duration-400 ease-in-out"
                    aria-hidden={!isActiveResort}
                  >
                    <li className="px-2 pt-3" aria-hidden={!isActiveResort}>
                      <button
                        className="flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60"
                        onClick={() => {
                          window.open(resort.weather, "_blank", "noopener,noreferrer");
                        }}
                        tabIndex={isActiveResort ? 0 : -1}
                      >
                        {t(strings.sidebar.weather)}
                        <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium bg-slate-200/60 text-slate-600 dark:bg-slate-800/60 dark:text-slate-300">
                          <FiExternalLink className="h-3 w-3" />
                          {t(strings.sidebar.newTab)}
                        </span>
                      </button>
                    </li>

            {resort.streams.map((stream) => {
              const isDisabled = stream.type === StreamType.Unavailable;
              const isSelected = selectedStream === stream;

              const indicator = (() => {
                if (stream.type === StreamType.External) {
                  return (
                    <span
                      className={cn(
                                "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
                                isSelected
                                  ? "bg-white/20 text-white"
                                  : "bg-slate-200/60 text-slate-600 dark:bg-slate-800/60 dark:text-slate-300"
                              )}
                            >
                              <FiExternalLink className="h-3 w-3" />
                              {t(strings.sidebar.newTab)}
                            </span>
                          );
                }
                return null;
              })();

              const streamKey =
                stream.metadata?.vivaldi
                  ? `${stream.metadata.vivaldi.serial}-${stream.metadata.vivaldi.channel}`
                  : stream.url
                    ? stream.url
                    : `${stream.name.ko}-${stream.name.en}`;

              return (
                <li
                  key={streamKey}
                  className="px-2"
                  aria-hidden={!isActiveResort}
                >
                          <button
                            className={cn(
                              "flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm transition-colors",
                              isDisabled
                                ? "cursor-not-allowed border border-dashed border-slate-300/70 bg-slate-100 text-slate-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-500"
                                : "hover:bg-accent-light/10 dark:hover:bg-accent-dark/20",
                              isSelected
                                ? "bg-accent-light/90 text-white dark:bg-accent-dark/90"
                                : "text-slate-700 dark:text-slate-200"
                            )}
                            disabled={isDisabled}
                            tabIndex={isActiveResort ? 0 : -1}
                            title={
                              stream.type === StreamType.External
                                ? t(strings.sidebar.externalTooltip)
                                : undefined
                            }
                            onClick={() => {
                              if (stream.type === StreamType.External) {
                                window.open(stream.url, "_blank", "noopener,noreferrer");
                                return;
                              }
                              onStreamSelect(stream);
                              setSelectedStream(stream);
                              setCurrentResort(resort);
                            }}
                          >
                            <span>{t(stream.name)}</span>
                            {(() => {
                              if (isDisabled) {
                                return (
                                  <span className="rounded-full border border-slate-300/70 bg-slate-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-400">
                                    {t(strings.sidebar.unavailable)}
                                  </span>
                                );
                              }
                              if (indicator) {
                                return <span>{indicator}</span>;
                              }
                              return null;
                            })()}
                          </button>
                        </li>
                      );
                    })}

                    <li aria-hidden className="px-2 pb-3" />
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="hidden md:flex flex-1 items-center justify-center text-xs uppercase tracking-[0.3em] text-slate-400">
          <span className="-rotate-90 whitespace-nowrap">{t(strings.sidebar.expand)}</span>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
