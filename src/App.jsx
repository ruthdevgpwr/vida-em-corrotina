import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { NovaPostagem } from './pages/NovaPostagem';
import './global.css';

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="novapostagem" element={<NovaPostagem />} />
        <Route path="*" element={<p>PÁGINA NÃO ENCONTRADA</p>} />
      </Routes>
    </BrowserRouter>
  );
}
