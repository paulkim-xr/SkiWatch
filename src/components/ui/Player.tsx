import { useRef, useEffect } from "react";
import Hls from "hls.js";
import { Stream, StreamType } from "@/data/Util";
import { useI18n } from "@/lib/i18n/context";
import { strings } from "@/lib/i18n/strings";
import VivaldiPlayer from "@/components/ui/vivaldi/VivaldiPlayer";

function Player({ stream }: { stream: Stream }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { t } = useI18n();

  useEffect(() => {
    const video = videoRef.current;

    if (stream.type === StreamType.HLS && video) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(stream.url);
        hls.attachMedia(video);
        return () => hls.destroy();
      } else {
        video.src = stream.url;
      }
    }
  }, [stream]);

  const streamTitle = t(stream.name);

  return (
    <div className="w-full md:flex-1 flex aspect-video md:aspect-auto min-h-0 md:h-full flex-col items-center justify-center bg-slate-200/70 dark:bg-slate-800/60 transition-colors overflow-hidden">
      {stream.type === StreamType.Unavailable ? (
        <div className="flex flex-col items-center gap-2 p-6 text-center text-slate-600 dark:text-slate-300">
          <p className="text-base font-semibold">{t(strings.player.emptyTitle)}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {t(strings.player.emptyBody)}
          </p>
        </div>
      ) : stream.type === StreamType.Vivaldi ? (
        <VivaldiPlayer stream={stream} />
      ) : stream.type === StreamType.IFrame ? (
        <iframe
          className="h-full w-full"
          src={stream.url}
          title={streamTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <video
          ref={videoRef}
          controls
          autoPlay
          muted
          playsInline
          aria-label={streamTitle}
          className="h-full w-full bg-black object-contain"
        />
      )}
    </div>
  );
}

export default Player;
