import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Resort, Stream, StreamType } from "@/data/Util";
import { resorts } from "@/data/data";
import Sidebar from "@/components/ui/Sidebar";
import Player from "@/components/ui/Player";
import { createText } from "@/lib/i18n/locales";
import { findStreamBySlugs, getResortSlug, getRouteForStream } from "@/lib/resortIndex";

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
    <div className="flex h-full flex-1 min-h-0 flex-col md:flex-row bg-white/70 dark:bg-slate-900/40 backdrop-blur-md md:backdrop-blur overflow-hidden">
      <Player stream={currentStream ?? fallbackStream} resortSlug={selectedResortSlug} rounded={false} />
      <Sidebar
        data={resorts}
        onStreamSelect={handleStreamSelect}
        selectedStreamId={selectedStreamId}
        selectedResortHomepage={selectedResortHomepage}
        selectionToken={selectionToken}
        shouldSyncSelection={shouldSyncSelection}
      />
    </div>
  );
}

export default Webcam;
