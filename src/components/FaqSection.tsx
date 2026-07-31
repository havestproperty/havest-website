import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { mockFaqs } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export const FaqSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Golden Visa', 'Expat Ownership', 'Investment & ROI', 'Buying Process', 'Off-Plan'];

  const filteredFaqs = selectedCategory === 'All'
    ? mockFaqs
    : mockFaqs.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
            {t.home.faqTitle}
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
            UAE REAL ESTATE FAQ & LEGAL INSIGHTS
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            {t.home.faqSubtitle}
          </p>

          {/* Category Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all min-h-[40px] ${
                  selectedCategory === cat
                    ? 'bg-blue-glow-btn text-white shadow-lg shadow-blue-500/20 font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = activeId === faq.id;
            const questionText = faq.question[language] || faq.question.en;
            const answerText = faq.answer[language] || faq.answer.en;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-slate-900/95 border-blue-500/40 shadow-xl shadow-blue-500/10'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setActiveId(isOpen ? null : faq.id)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 focus:outline-none min-h-[64px]"
                  id={`faq-toggle-${faq.id}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <div>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-blue-400 block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-base md:text-lg font-serif font-semibold text-white">
                        {questionText}
                      </h3>
                    </div>
                  </div>

                  <div className={`p-2 rounded-full bg-slate-800/80 text-blue-400 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-blue-500/20' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 md:p-6 pt-0 border-t border-slate-800/50 text-slate-300 text-sm leading-relaxed space-y-3">
                        <p>{answerText}</p>
                        <div className="pt-2 flex items-center gap-2 text-xs text-blue-400 font-sans font-medium">
                          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                          <span>Verified by HAVEST Legal & Real Estate Advisory</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
