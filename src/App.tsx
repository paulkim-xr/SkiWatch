import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Webcam from './Webcam';
import Slopes from './Slopes';

function App() {
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
