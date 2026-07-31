import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LeadGenPopup } from './components/LeadGenPopup';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { OffPlanPage } from './pages/OffPlanPage';
import { InvestorHubPage } from './pages/InvestorHubPage';
import { ContactPage } from './pages/ContactPage';
import { Property, OffPlanProject } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [leadPopupOpen, setLeadPopupOpen] = useState<boolean>(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            onOpenLeadPopup={() => setLeadPopupOpen(true)}
            onSelectProperty={(prop) => {
              setSelectedProperty(prop);
              setCurrentPage('properties');
            }}
            onSelectOffPlan={() => setCurrentPage('offplan')}
          />
        );
      case 'properties':
        return (
          <PropertiesPage
            onOpenLeadPopup={() => setLeadPopupOpen(true)}
            selectedProperty={selectedProperty}
            onSelectProperty={setSelectedProperty}
          />
        );
      case 'offplan':
        return (
          <OffPlanPage
            onOpenLeadPopup={() => setLeadPopupOpen(true)}
            onSelectOffPlan={() => setLeadPopupOpen(true)}
          />
        );
      case 'investor':
        return <InvestorHubPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            onOpenLeadPopup={() => setLeadPopupOpen(true)}
            onSelectProperty={(prop) => {
              setSelectedProperty(prop);
              setCurrentPage('properties');
            }}
            onSelectOffPlan={() => setCurrentPage('offplan')}
          />
        );
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-blue-600/30 selection:text-blue-100">
        
        {/* Global Navigation Header */}
        <Header
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onOpenLeadPopup={() => setLeadPopupOpen(true)}
        />

        {/* Animated Page Content */}
        <main className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Global Footer */}
        <Footer
          setCurrentPage={setCurrentPage}
          onOpenLeadPopup={() => setLeadPopupOpen(true)}
        />

        {/* Global Lead Generation Popup Modal */}
        <LeadGenPopup
          isOpen={leadPopupOpen}
          onClose={() => setLeadPopupOpen(false)}
        />

        {/* Floating WhatsApp Action Trigger */}
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

