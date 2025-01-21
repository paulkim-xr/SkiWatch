import { useState } from 'react';
import { Stream, StreamType, streamData } from './data/data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Webcam from './Webcam';
import Slopes from './Slopes';

function App() {
  const [currentStream, setCurrentStream] = useState<Stream | undefined>();

  return (
    <BrowserRouter basename='/SkiWatch'>
      <Routes>
        <Route path='/slopes' element={<Slopes />} />
        <Route path='/' element={<Webcam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
