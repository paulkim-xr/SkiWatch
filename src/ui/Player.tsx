import { useRef, useEffect } from "react";
import Hls from "hls.js";
import { Stream, StreamType } from "../data/data";

function Player({ stream }: { stream: Stream }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    
    switch (stream.type) {
      case StreamType.HLS:
        if (video && Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(stream.url);
          hls.attachMedia(video);
          return () => hls.destroy();
        } else if (video) {
          video.src = stream.url;
        }
        break;
      case StreamType.YouTube:
        break;
      case StreamType.Unavailable:
        break;
      default:

    }
  }, [stream]);

  return (
    <div className="video-container">
      <video ref={videoRef} controls style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default Player;