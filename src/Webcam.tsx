import { useState } from 'react';
import { Stream, StreamType } from './data/Util';
import { resorts } from './data/data';
import './Webcam.css';
import Sidebar from './ui/Sidebar';
import Player from './ui/Player';

function Webcam() {
  const [currentStream, setCurrentStream] = useState<Stream | undefined>();

  return (
    <div className="App flex h-screen">
      <Player stream={currentStream || { name: { ko: "선택된 영상이 없습니다", en: "No Stream Selected" }, type: StreamType.Unavailable, url: "" }} />
      <Sidebar data={resorts} onStreamSelect={setCurrentStream} />
    </div>
  );
}

export default Webcam;
