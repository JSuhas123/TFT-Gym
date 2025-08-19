import React from 'react';
import { Footer } from './Footer';
import Navigation from './Navigation';

interface PageLayoutProps {
  children: React.ReactNode;
  onLogin: () => void;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, onLogin }) => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation onLoginClick={onLogin} />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};