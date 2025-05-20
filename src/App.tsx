import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './components/layouts/MainLayout';
import Home from './pages/Home';
import StartBusiness from './pages/StartBusiness';
import Team from './pages/about/Team';
import BusinessCounselling from './pages/BusinessCounselling';
import Resources from './pages/Resources';
import WhoWeAre from './pages/about/WhoWeAre';
import Board from './pages/about/Board';
import ClientProfiles from './pages/about/ClientProfiles';
import Partners from './pages/about/Partners';
import Contact from './pages/about/Contact';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfUse from './pages/legal/TermsOfUse';
import Accessibility from './pages/legal/Accessibility';
import Disclaimer from './pages/legal/Disclaimer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
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
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
