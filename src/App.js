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
import ScrollToTop from './components/ScrollToTop';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  useEffect(() => {
    document.body.className = 'p-4 bg-[#f9fbf7] min-h-screen dark:bg-dmbody';
    return () => { document.body.className = ''; }
  });
  return (
    <div>
  <React.StrictMode >
    <ThemeProvider>
    <ScrollToTop />
    <Routes>
    <Route path="/" exact element={<Home />} />
    <Route exact path="/uiux" element={<Uiux />} />
    <Route exact path="/web" element={<Web />} />
    <Route exact path="/threed" element={<Threed />} />
    <Route exact path="/info" element={<Info />} />
    <Route exact path="/tutorials" element={<Tutorials />} />
    <Route path='*'element={<NotFoundPage />} />
    </Routes>
    <Footer />
    <Hamburger />
    <GoTopButton />
    </ThemeProvider>
  </React.StrictMode>
  </div>
)}

export default App;

