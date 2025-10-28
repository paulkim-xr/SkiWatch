import { useState } from 'react';
import { Stream, StreamType } from '@/data/Util';
import { resorts } from '@/data/data';
import Sidebar from '@/components/ui/Sidebar';
import Player from '@/components/ui/Player';
import { createText } from '@/lib/i18n/locales';

function Webcam() {
  const [currentStream, setCurrentStream] = useState<Stream | undefined>();

  return (
    <div className="flex flex-1 min-h-0 flex-col md:flex-row bg-white/70 dark:bg-slate-900/40 backdrop-blur-md md:backdrop-blur flex-grow overflow-hidden">
      <Player
        stream={
          currentStream || {
            name: createText({ ko: "선택된 영상이 없습니다", en: "No stream selected" }),
            type: StreamType.Unavailable,
            url: "",
          }
        }
      />
      <Sidebar data={resorts} onStreamSelect={setCurrentStream} />
    </div>
  );
}

export default Webcam;
