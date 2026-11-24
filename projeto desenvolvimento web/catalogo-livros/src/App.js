import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Rodape from './components/Rodape/Rodape';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Catalogo from './pages/Catalogo/Catalogo';
import Contato from './pages/Contato/Contato';

function App() {
  return (
    <BrowserRouter>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
