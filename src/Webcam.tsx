import { useState } from 'react';
import { Stream, StreamType, streamData } from './data/data';
import './Webcam.css';
import Sidebar from './ui/Sidebar';
import Player from './ui/Player';

function Webcam() {
  const [currentStream, setCurrentStream] = useState<Stream | undefined>();

  return (
    <div className="App flex h-screen">
      <Player stream={currentStream || { name: "No Stream Selected", type: StreamType.Unavailable, url: "" }} />
      <Sidebar data={streamData} onStreamSelect={setCurrentStream} />
    </div>
  );
}

export default Webcam;
