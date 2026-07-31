import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, ShieldCheck, Send, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LeadGenPopupProps {
  isOpen: boolean;
  onClose: () => void;
  titleOverride?: string;
}

export const LeadGenPopup: React.FC<LeadGenPopupProps> = ({ isOpen, onClose, titleOverride }) => {
  const { t } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('5M - 15M AED');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    let hasTriggered = false;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        hasTriggered = true;
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !whatsapp) return;
    setIsSubmitted(true);
  };

  const handleOpenWhatsAppDirect = () => {
    const text = encodeURIComponent(`Hello HAVEST PROPERTIES, my name is ${fullName}. I am interested in off-plan opportunities in Abu Dhabi & Dubai with budget ${budget}. Please contact me.`);
    window.open(`https://wa.me/971505002896?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg overflow-hidden glass-panel-blue rounded-2xl bg-slate-900/95 p-6 md:p-8 text-slate-100 shadow-2xl border border-blue-500/30 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              id="lead-popup-close-btn"
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-2.5 rounded-full hover:bg-slate-800/80 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  VIP Priority Access
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-white font-bold mb-2">
                  {titleOverride || t.leadPopup.headline}
                </h3>
                <p className="text-xs md:text-sm text-slate-300 mb-6 leading-relaxed">
                  {t.leadPopup.subtitle}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-slate-400 mb-1">
                      {t.contact.fullName} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.leadPopup.namePlaceholder}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-semibold text-slate-400 mb-1">
                        {t.contact.phoneWhatsapp} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder={t.leadPopup.whatsappPlaceholder}
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-semibold text-slate-400 mb-1">
                        {t.contact.email}
                      </label>
                      <input
                        type="email"
                        placeholder={t.leadPopup.emailPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-slate-400 mb-1">
                      Investment Budget (AED)
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="2M - 5M AED">2M - 5M AED (Golden Visa Eligible)</option>
                      <option value="5M - 15M AED">5M - 15M AED (Ultra-Prime)</option>
                      <option value="15M - 50M AED">15M - 50M AED (Mansion / Penthouse)</option>
                      <option value="50M+ AED">50M+ AED (Palatial Estate)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    id="lead-popup-submit-btn"
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-glow-btn text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-blue-500/20 hover:brightness-110 transition-all flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <Send className="w-4 h-4 text-blue-200" />
                    {t.leadPopup.submitButton}
                  </button>

                  <p className="text-center text-xs text-slate-500 mt-2">
                    {t.leadPopup.privacyNote}
                  </p>
                </form>
              </div>
            ) : (
              <div className="py-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-blue-400">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-serif text-white font-bold">
                  VIP Request Received
                </h4>
                <p className="text-xs md:text-sm text-slate-300 max-w-md mx-auto">
                  {t.leadPopup.successMessage}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleOpenWhatsAppDirect}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors min-h-[44px]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Chat Directly on WhatsApp (+971 50 500 2896)
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors min-h-[44px]"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
