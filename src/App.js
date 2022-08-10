import React from 'react';
import './index.css';
import { ThemeProvider } from './components/themeContext';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Info from './pages/info';
import Threed from './pages/threed';
import Uiux from './pages/uiux';
import Web from './pages/web';
import { useEffect } from 'react';
import Footer from './components/footer';
import GoTopButton from './components/scrolltop';
import Tutorials from './pages/tutorials';
import Hamburger from './components/hamburger';

function App() {
  useEffect(() => {
    document.body.className = 'p-4 bg-[#f5f5f5] min-h-screen dark:bg-dmbody';
    return () => { document.body.className = ''; }
  });
  return (
    <div>
  <React.StrictMode >
    <ThemeProvider>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/uiux" element={<Uiux />} />
    <Route path="/web" element={<Web />} />
    <Route path="/threed" element={<Threed />} />
    <Route path="/info" element={<Info />} />
    <Route path="/tutorials" element={<Tutorials />} />
    </Routes>
    <Footer />
    <Hamburger />
    <GoTopButton />
    </ThemeProvider>
  </React.StrictMode>
  </div>
)}

export default App;

