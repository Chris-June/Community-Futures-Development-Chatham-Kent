import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SkipToContent from '../common/SkipToContent';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SkipToContent />
      <Navbar />
      <main 
        id="main-content" 
        className="flex-grow" 
        role="main"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}