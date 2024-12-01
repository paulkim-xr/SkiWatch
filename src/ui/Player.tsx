import { useRef, useEffect } from "react";
import Hls from "hls.js";
import { Stream, StreamType } from "../data/data";
import "./Player.css";

function Player({ stream }: { stream: Stream }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  return (
    <div className="flex-1 bg-gray-200 flex items-center justify-center">
      {stream.type === StreamType.YouTube ? (
        <iframe
          width="100%"
          height="100%"
          src={stream.url}
          title={stream.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <video ref={videoRef} controls autoPlay />
      )}
    </div>
  );
}

export default Player;