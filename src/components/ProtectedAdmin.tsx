import React, { useState, useEffect } from 'react';
import { AdminLogin } from './AdminLogin';

interface ProtectedAdminProps {
  children: React.ReactNode;
}

export function ProtectedAdmin({ children }: ProtectedAdminProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const authToken = sessionStorage.getItem('admin_auth');
    if (authToken === 'authenticated') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (password: string) => {
    // Store authentication in session storage (not secure for production, but ok for demo)
    sessionStorage.setItem('admin_auth', 'authenticated');
    setIsAuthenticated(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-yellow-500">Chargement...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <>{children}</>;
}
