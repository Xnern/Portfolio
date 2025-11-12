import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HeaderNew } from './components/HeaderNew';
import { FooterNew } from './components/FooterNew';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/PageTransition';
import { ScrollProgress } from './components/ScrollProgress';
import { SEOHead } from './components/SEOHead';

// Lazy load pages for better performance
const HomeNew = lazy(() => import('./pages/HomeNew').then(module => ({ default: module.HomeNew })));
const Admin = lazy(() => import('./pages/Admin').then(module => ({ default: module.Admin })));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then(module => ({ default: module.ProjectDetail })));
const ProtectedAdmin = lazy(() => import('./components/ProtectedAdmin').then(module => ({ default: module.ProtectedAdmin })));

function AppContent() {
  const location = useLocation();
  const isAdminLogin = location.pathname === '/admin' && !sessionStorage.getItem('admin_auth');

  return (
    <>
      <SEOHead />
      <ScrollProgress />
      <div className="min-h-screen bg-black text-white cursor-none md:cursor-none">
        {!isAdminLogin && <HeaderNew />}
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="text-yellow-500">Chargement...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomeNew />} />
            <Route
              path="/admin"
              element={
                <ProtectedAdmin>
                  <Admin />
                </ProtectedAdmin>
              }
            />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </Suspense>
        {!isAdminLogin && <FooterNew />}
      </div>
    </>
  );
}

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduce loading time for better performance (only show on first visit)
    const hasSeenLoading = localStorage.getItem('hasSeenLoading');
    const loadingDuration = hasSeenLoading === 'true' ? 500 : 1500; // 0.5s if seen before, 1.5s first time

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        {/* Loading screen */}
        {isLoading && <LoadingScreen />}

        {/* Custom cursor - only on desktop */}
        <div className="hidden md:block">
          <CustomCursor />
        </div>

        <AppContent />
      </Router>
    </HelmetProvider>
  );
}