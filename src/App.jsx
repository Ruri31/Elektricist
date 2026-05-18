import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import Hero from './components/Hero.jsx';
import TrustBar from './components/TrustBar.jsx';
import ProblemCategorySection from './components/ProblemCategorySection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import Gallery from './components/Gallery.jsx';
import Packages from './components/Packages.jsx';
import Contact from './components/Contact.jsx';
import ServiceDetail from './components/ServiceDetail.jsx';
import SEO from './components/SEO.jsx';
import LocalSEOSection from './components/LocalSEOSection.jsx';
import { PreventivProvider } from './context/PreventivContext.jsx';

function HomePage() {
  return (
    <>
      <SEO includeFaq={true} />
      <Hero />
      <TrustBar />
      <ServicesSection />
      <Gallery />
      <ProblemCategorySection />
      <Packages />
      <LocalSEOSection />
      <Contact />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <SEO
        title="Kontakt | ElektroNet Tiranë"
        description="Na kontaktoni për shërbime elektrike, kamera sigurie, IT support dhe networking në Tiranë."
      />
      <div className="pt-20">
        <Contact />
      </div>
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <PreventivProvider>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sherbime/:slug" element={<ServiceDetail />} />
              <Route path="/kontakt" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingActions />
        </PreventivProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
