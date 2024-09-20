import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Head from './components/Head';
import Komputery from './pages/Komputery';
import Drukarki from './pages/Drukarki';

export default function App() {
  return (
    <BrowserRouter>
    <Head/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />  
        <Route path="/komputery" element={<Komputery />} />  
        <Route path="/drukarki" element={<Drukarki />} />  
      </Routes>
    </BrowserRouter>
  );
}
