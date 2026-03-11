import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Resort, Stream, StreamType } from "@/data/Util";
import { resorts } from "@/data/data";
import Sidebar from "@/components/ui/Sidebar";
import Player from "@/components/ui/Player";
import { createText } from "@/lib/i18n/locales";
import { findStreamBySlugs, getResortSlug, getRouteForStream } from "@/lib/resortIndex";
import { getStreamIdentifier } from "@/lib/streamKeys";

type WebcamParams = {
  resort?: string;
  stream?: string;
};

function Webcam() {
  const params = useParams<WebcamParams>();
  const navigate = useNavigate();
  const [currentStream, setCurrentStream] = useState<Stream | undefined>();
  const [selectedStreamId, setSelectedStreamId] = useState<string | undefined>();
  const [selectedResortHomepage, setSelectedResortHomepage] = useState<string | undefined>();
  const [selectedResortSlug, setSelectedResortSlug] = useState<string | undefined>();
  const [selectionToken, setSelectionToken] = useState(1);
  const [shouldSyncSelection, setShouldSyncSelection] = useState(true);
  const resortOrder = resorts.map((r) => r.homepage);
  const streamOrder: Record<string, string[]> = (() => {
    const next: Record<string, string[]> = {};
    resorts.forEach((resort) => {
      next[resort.homepage] = resort.streams.map((stream) => getStreamIdentifier(resort, stream));
    });
    return next;
  })();

  useEffect(() => {
    if (params.resort && params.stream) {
      const found = findStreamBySlugs(params.resort, params.stream);
      if (found) {
        setCurrentStream(found.stream);
        setSelectedStreamId(found.streamId);
        setSelectedResortHomepage(found.resort.homepage);
        setSelectedResortSlug(found.resortSlug);
        setShouldSyncSelection(true);
        setSelectionToken((token) => token + 1);
        return;
      }
    }
    setShouldSyncSelection(false);
    setSelectedStreamId(undefined);
    setSelectedResortHomepage(undefined);
    setSelectedResortSlug(undefined);
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

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-white/70 text-slate-900 backdrop-blur dark:bg-slate-900/40 dark:text-white">
      <div className="flex flex-1 min-h-0 flex-col overflow-hidden md:flex-row md:items-stretch">
        <div className="order-1 flex w-full shrink-0 flex-col md:h-full md:min-h-0 md:flex-1 md:overflow-hidden">
          <div className="flex w-full flex-col overflow-hidden rounded-xl border border-slate-200/70 bg-white/80 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/70 md:min-h-0 md:flex-1">
            <div className="relative w-full overflow-hidden md:min-h-0 md:flex-1">
              <Player stream={currentStream ?? fallbackStream} resortSlug={selectedResortSlug} rounded={false} />
            </div>
          </div>
        </div>

        <div className="order-2 relative flex min-h-0 w-full flex-1 flex-col pt-3 md:h-full md:w-[320px] md:flex-none md:pt-0 lg:w-[360px]">
          <Sidebar
            data={resorts}
            resortOrder={resortOrder}
            streamOrder={streamOrder}
            onStreamSelect={handleStreamSelect}
            selectedStreamId={selectedStreamId}
            selectedResortHomepage={selectedResortHomepage}
            selectionToken={selectionToken}
            shouldSyncSelection={shouldSyncSelection}
          />
        </div>
      </div>
    </div>
  );
}

export default Webcam;
