import { useState } from 'react';
import { Stream, StreamType, streamData } from './data/data';
import './App.css';
import Sidebar from './ui/Sidebar';
import Player from './ui/Player';

function App() {
  const [currentStream, setCurrentStream] = useState<Stream | undefined>();

  return (
    <div className="App">
      <Sidebar data={streamData} onStreamSelect={setCurrentStream} />
      <Player stream={currentStream || { name: "No Stream Selected", type: StreamType.Unavailable, url: "" }} />
    </div>
  );
}

export default App;
