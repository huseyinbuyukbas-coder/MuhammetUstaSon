import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ServicesSection } from './components/ServicesSection';
import { QuickDiagnosticTool } from './components/QuickDiagnosticTool';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessSection } from './components/ProcessSection';
import { BrandLogos } from './components/BrandLogos';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceRequestModal } from './components/ServiceRequestModal';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);
  const [modalInitialNote, setModalInitialNote] = useState<string | undefined>(undefined);

  const handleOpenModal = (serviceId?: string, note?: string) => {
    setSelectedServiceForModal(serviceId);
    setModalInitialNote(note);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedServiceForModal(undefined);
    setModalInitialNote(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Header / Sticky Nav */}
      <Header onOpenModal={() => handleOpenModal()} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Area */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 2. Trust Stats & Credibility */}
        <TrustStats />

        {/* 3. Core Technical Services */}
        <ServicesSection onSelectService={(serviceId) => handleOpenModal(serviceId)} />

        {/* 4. Interactive Diagnostic Tool */}
        <QuickDiagnosticTool />

        {/* 5. Why Muhammet Usta? */}
        <WhyUsSection />

        {/* 6. 4-Step Transparent Workflow */}
        <ProcessSection />

        {/* 7. Supported Brands */}
        <BrandLogos />

        {/* 8. Google Customer Reviews */}
        <ReviewsSection />

        {/* 9. Service Areas & Dispatch */}
        <ServiceAreasSection />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />

        {/* 11. High-Converting Contact & Appointment */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenModal={(serviceId) => handleOpenModal(serviceId)} />

      {/* Modal for Service Requests */}
      <ServiceRequestModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialServiceId={selectedServiceForModal}
        initialNote={modalInitialNote}
      />

      {/* Mobile Sticky Quick Action Bar & Floating WhatsApp */}
      <MobileQuickBar onOpenModal={() => handleOpenModal()} />
    </div>
  );
}
