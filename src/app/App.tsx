import { BrowserRouter, Routes, Route } from 'react-router';
import Navigation from './components/Navigation';
import HeroVideo from './components/HeroVideo';
import Statistics from './components/Statistics';
import CategoryGrid from './components/CategoryGrid';
import FeaturedEstablishments from './components/FeaturedEstablishments';
import EndlessDiscovery from './components/EndlessDiscovery';
import VIPSections from './components/VIPSections';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import WilayaDiscovery from './components/WilayaDiscovery';

// Pages
import ActivitiesPage from './pages/ActivitiesPage';
import ActivityDetailPage from './pages/ActivityDetailPage';
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import HotelsPage from './pages/HotelsPage';
import HotelDetailPage from './pages/HotelDetailPage';
import ImmobilierPage from './pages/ImmobilierPage';
import LocationVoituresPage from './pages/LocationVoituresPage';
import SpaBeautePage from './pages/SpaBeautePage';
import ClubPrivePage from './pages/ClubPrivePage';
import ConciergerieVIPPage from './pages/ConciergerieVIPPage';
import DashboardPage from './pages/DashboardPage';
import AffiliationPage from './pages/AffiliationPage';
import QuiSommesNousPage from './pages/QuiSommesNousPage';
import BOAElKheirPage from './pages/BOAElKheirPage';
import NakhlaPage from './pages/NakhlaPage';
import NissaCirclePage from './pages/NissaCirclePage';

const LandingPage = () => (
  <div className="min-h-screen bg-[#FAFAF8]">
    <Navigation />
    <HeroVideo />
    <Statistics />
    <CategoryGrid />
    <WilayaDiscovery />
    <FeaturedEstablishments />
    <EndlessDiscovery />
    <VIPSections />
    <Testimonials />
    <Partners />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/activites" element={<ActivitiesPage />} />
        <Route path="/activite-detail" element={<ActivityDetailPage />} />
        <Route path="/activites/:id" element={<ActivityDetailPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/hotels/:id" element={<HotelDetailPage />} />
        <Route path="/immobilier" element={<ImmobilierPage />} />
        <Route path="/location-voitures" element={<LocationVoituresPage />} />
        <Route path="/spa-beaute" element={<SpaBeautePage />} />
        <Route path="/club-prive" element={<ClubPrivePage />} />
        <Route path="/conciergerie-vip" element={<ConciergerieVIPPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* Alias pages */}
        <Route path="/affiliation" element={<AffiliationPage />} />
        <Route path="/qui-sommes-nous" element={<QuiSommesNousPage />} />
        <Route path="/boa-el-kheir" element={<BOAElKheirPage />} />
        <Route path="/club-prive/nakhla" element={<NakhlaPage />} />
        <Route path="/club-prive/nissa" element={<NissaCirclePage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
