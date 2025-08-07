import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SkipToContent from '../common/SkipToContent';
import LogoMarquee from '../LogoMarquee/LogoMarquee';
import { approvedPartnerLogos } from '../../data/approvedPartners';

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
        className="flex-grow flex flex-col" 
        role="main"
        tabIndex={-1}
      >
        <div className="flex-grow">
          {children}
        </div>
      </main>

      {/* Global Approved Partners marquee - slim site-wide strip */}
      <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="sr-only">Trusted Service Providers</h2>
          <LogoMarquee
            logos={approvedPartnerLogos}
            speedSeconds={32}
            gap="2rem"
            // grayscale
            maskEdges
            pauseOnHover
            className="mx-auto"
            itemClassName="h-8 sm:h-10 md:h-12"
          />
        </div>
      </div>
      
      <Footer className="mt-auto" />
    </div>
  );
}