import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './components/layouts/MainLayout';
import LoadingSpinner from './components/common/LoadingSpinner';
import ErrorBoundary from './components/common/ErrorBoundary';
import SEO from './components/seo/SEO';
import { getRouteSEO } from './utils/seoUtils';

// Lazy load all page components
const Home = lazy(() => import('./pages/Home'));
const StartBusiness = lazy(() => import('./pages/StartBusiness'));
const BusinessCounselling = lazy(() => import('./pages/BusinessCounselling'));
const Resources = lazy(() => import('./pages/Resources'));
const WhoWeAre = lazy(() => import('./pages/about/WhoWeAre'));
const Team = lazy(() => import('./pages/about/Team'));
const Board = lazy(() => import('./pages/about/Board'));
const ClientProfiles = lazy(() => import('./pages/about/ClientProfiles'));
const Partners = lazy(() => import('./pages/about/Partners'));
const Contact = lazy(() => import('./pages/about/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/legal/TermsOfUse'));
const Accessibility = lazy(() => import('./pages/legal/Accessibility'));
const Disclaimer = lazy(() => import('./pages/legal/Disclaimer'));
const LearnMore = lazy(() => import('./pages/LearnMore'));

// Component to handle route changes and update SEO
const RouteHandler = () => {
  const location = useLocation();
  const { title, description, keywords } = getRouteSEO(location.pathname);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <SEO
      title={title}
      description={description}
      keywords={keywords}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start-business" element={<StartBusiness />} />
        <Route path="/counselling" element={<BusinessCounselling />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about/who-we-are" element={<WhoWeAre />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/board" element={<Board />} />
        <Route path="/about/client-profiles" element={<ClientProfiles />} />
        <Route path="/about/partners" element={<Partners />} />
        <Route path="/about/contact" element={<Contact />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </SEO>
  );
};

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <MainLayout>
            <Suspense fallback={<LoadingSpinner fullPage />}>
              <RouteHandler />
            </Suspense>
          </MainLayout>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
