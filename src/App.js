import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './routes/HomePage';
import Flowers from './components/Flowers';
import Header from './components/Header';
import SignIn from './routes/SignIn';
import Shop from './routes/Shop';
import Contacts from './routes/Contacts';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/flowers" element={<Flowers />} />
            <Route path="/toys" element="toys" />
            <Route path="/shose" element="shose" />
            <Route path="/womens" element="womens" />
            <Route path="/mens" element="mens" />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/contact" element={<Contacts/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
