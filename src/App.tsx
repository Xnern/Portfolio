import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeNew } from './pages/HomeNew';
import { Admin } from './pages/Admin';
import { ProjectDetail } from './pages/ProjectDetail';
import { HeaderNew } from './components/HeaderNew';
import { FooterNew } from './components/FooterNew';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/PageTransition';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Loading screen */}
      {isLoading && <LoadingScreen />}

      {/* Custom cursor - only on desktop */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      <div className="min-h-screen bg-black text-white cursor-none md:cursor-none">
        <HeaderNew />
        <Routes>
          <Route path="/" element={<HomeNew />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <FooterNew />
      </div>
    </Router>
  );
}