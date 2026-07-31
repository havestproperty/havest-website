import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  setCurrentPage: (page: string) => void;
  onOpenLeadPopup: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, onOpenLeadPopup }) => {
  const { t } = useLanguage();

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <BrandLogo size="md" />

          <p className="text-xs text-slate-400 leading-relaxed">
            {t.footer.about}
          </p>

          <div className="pt-2 space-y-1 text-xs text-slate-300 font-sans font-semibold tracking-wide tabular-nums">
            <div className="flex items-center gap-2 text-blue-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Official UAE Licensed Brokerage</span>
            </div>
            <div>Commercial License: <span className="text-slate-100 font-bold">CN-6347100</span></div>
            <div>Broker License (ADM): <span className="text-slate-100 font-bold">202600464262</span></div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h4 className="text-sm uppercase font-bold text-white tracking-wider font-serif">
            {t.footer.quickLinks}
          </h4>
          <ul className="space-y-2.5 text-xs">
            {[
              { id: 'home', label: t.header.home },
              { id: 'properties', label: t.header.properties },
              { id: 'offplan', label: t.header.offPlan },
              { id: 'investor', label: t.header.investorHub },
              { id: 'contact', label: t.header.contact },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 min-h-[36px]"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Direct Contact & Offices */}
        <div className="space-y-4">
          <h4 className="text-sm uppercase font-bold text-white tracking-wider font-serif">
            Headquarter Offices
          </h4>
          <div className="space-y-3.5 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block font-semibold">Abu Dhabi Office</strong>
                <span className="text-slate-400">Saadiyat Cultural District, Mamsha Al Saadiyat</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block font-semibold">Dubai Flagship Office</strong>
                <span className="text-slate-400">Boulevard Plaza Tower 1, Level 24, Downtown Dubai</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href="tel:+971505002896"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors font-semibold text-slate-200"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>+971 50 500 2896 (Click to Call)</span>
              </a>

              <a
                href="mailto:Info@havestproperties.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors font-medium text-slate-300"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>Info@havestproperties.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Confidential Advisory Newsletter */}
        <div className="space-y-4">
          <h4 className="text-sm uppercase font-bold text-white tracking-wider font-serif">
            Private Off-Plan Advisory
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Subscribe for confidential pre-launch allocations, market analysis, and off-market penthouses.
          </p>

          <button
            onClick={onOpenLeadPopup}
            className="w-full py-3.5 px-4 rounded-xl bg-blue-glow-btn text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 hover:brightness-110 transition-all min-h-[44px]"
          >
            <Lock className="w-3.5 h-3.5 text-blue-200" />
            <span>Join VIP Investor List</span>
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          © {new Date().getFullYear()} HAVEST PROPERTIES LLC. {t.footer.allRightsReserved}
        </div>
        <div className="flex items-center gap-6 font-sans font-semibold tracking-wide text-[11px] tabular-nums">
          <span>Commercial Lic: CN-6347100</span>
          <span>ADM Broker Lic: 202600464262</span>
        </div>
      </div>
    </footer>
  );
};
