import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Globe, Menu, X, ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BrandLogo } from './BrandLogo';
import { Language } from '../types';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenLeadPopup: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, onOpenLeadPopup }) => {
  const { language, setLanguage, currency, setCurrency, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ar', label: 'العربية', flag: '🇦🇪' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 text-slate-100 shadow-2xl">
      {/* Top Banner: Permanent Company Contact Info & Licenses */}
      <div className="bg-slate-900/90 border-b border-slate-800/60 text-xs py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-2 text-slate-400">
          
          {/* Licenses Display */}
          <div className="flex items-center gap-3 text-[11px] font-sans font-semibold tracking-wide text-slate-300 tabular-nums">
            <span className="inline-flex items-center gap-1 text-blue-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              {t.footer.licensedBrokerage}
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="hover:text-blue-300 transition-colors">
              {t.header.commercialLicense}
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="hover:text-blue-300 transition-colors">
              {t.header.brokerLicense}
            </span>
          </div>

          {/* Contact Details & Currency Switcher */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+971505002896"
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.header.callUs}</span>
            </a>

            <a
              href="mailto:Info@havestproperties.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-blue-400 transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.header.emailUs}</span>
            </a>

            {/* Currency Toggle */}
            <div className="flex items-center gap-1 bg-slate-950 rounded border border-slate-800 p-0.5 text-[10px]">
              <button
                onClick={() => setCurrency('AED')}
                className={`px-2 py-1 rounded transition-colors ${currency === 'AED' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}`}
              >
                AED
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2 py-1 rounded transition-colors ${currency === 'USD' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}`}
              >
                USD ($)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left"
          id="brand-logo-btn"
        >
          <BrandLogo size="md" />
        </button>

        {/* Desktop Page Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase font-medium tracking-wider">
          {[
            { id: 'home', label: t.header.home },
            { id: 'properties', label: t.header.properties },
            { id: 'offplan', label: t.header.offPlan },
            { id: 'investor', label: t.header.investorHub },
            { id: 'contact', label: t.header.contact },
          ].map((nav) => (
            <button
              key={nav.id}
              onClick={() => handleNavClick(nav.id)}
              id={`nav-link-${nav.id}`}
              className={`relative py-1 transition-colors ${
                currentPage === nav.id
                  ? 'text-white font-bold'
                  : 'text-slate-300 hover:text-blue-300'
              }`}
            >
              {nav.label}
              {currentPage === nav.id && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right Section: Language Selector & VIP Action Button */}
        <div className="flex items-center gap-3">
          
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              id="language-toggle-btn"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold hover:border-blue-500/50 transition-colors min-h-[40px]"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>{languages.find((l) => l.code === language)?.flag}</span>
              <span className="uppercase">{language}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {langDropdownOpen && (
              <div className="absolute top-full mt-2 right-0 z-50 w-36 rounded-lg bg-slate-900 border border-slate-800 shadow-2xl py-1 text-xs">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 flex items-center gap-2.5 hover:bg-slate-800 transition-colors ${
                      language === lang.code ? 'text-blue-400 font-bold bg-slate-800/60' : 'text-slate-300'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* VIP Consultation Action Button */}
          <button
            onClick={onOpenLeadPopup}
            id="vip-consultation-btn"
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-glow-btn text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all min-h-[40px]"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-200" />
            <span>{t.header.vipConsultation}</span>
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="lg:hidden p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-blue-400 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/98 border-t border-slate-800/80 px-6 py-6 space-y-4 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {[
                { id: 'home', label: t.header.home },
                { id: 'properties', label: t.header.properties },
                { id: 'offplan', label: t.header.offPlan },
                { id: 'investor', label: t.header.investorHub },
                { id: 'contact', label: t.header.contact },
              ].map((nav) => (
                <button
                  key={nav.id}
                  onClick={() => handleNavClick(nav.id)}
                  className={`text-left text-sm uppercase font-semibold py-3 px-4 rounded-xl transition-colors min-h-[44px] flex items-center ${
                    currentPage === nav.id ? 'bg-blue-600/20 text-blue-300 font-bold border border-blue-500/30' : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  {nav.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadPopup();
                }}
                className="w-full py-3.5 rounded-xl bg-blue-glow-btn text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                {t.header.vipConsultation}
              </button>

              <a
                href="tel:+971505002896"
                className="w-full py-3 rounded-xl border border-slate-800 text-center text-xs text-slate-300 font-semibold min-h-[44px] flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{t.header.callUs}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
