import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './routes/HomePage';
import Flowers from './components/Flowers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flowers" element={<Flowers />} />
          <Route path="/toys" element="toys" />
          <Route path="/shose" element="shose" />
          <Route path="/womens" element="womens" />
          <Route path="/mens" element="mens" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
