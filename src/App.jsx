import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Destination from './Pages/Destination/Destination'
import Home from './Pages/Home/Home';
import Trips from './Pages/Trips/Trips';
import Contact from './Pages/Contacts/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination/>} />
          <Route path="/Trips" element={<Trips />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
