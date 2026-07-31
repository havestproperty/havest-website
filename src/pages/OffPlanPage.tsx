import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Download, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { mockOffPlanProjects } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { OffPlanProject } from '../types';

interface OffPlanPageProps {
  onOpenLeadPopup: () => void;
  onSelectOffPlan: (project: OffPlanProject) => void;
}

export const OffPlanPage: React.FC<OffPlanPageProps> = ({ onOpenLeadPopup }) => {
  const { t, formatPrice } = useLanguage();
  const [developerFilter, setDeveloperFilter] = useState<string>('All');
  const [budgetTier, setBudgetTier] = useState<string>('All');

  const developers = ['All', 'Aldar', 'Emaar', 'Nakheel', 'Modon', 'Q Properties', 'Binghatti'];

  const budgetTiers = [
    { id: 'All', label: 'All Categories' },
    { id: '1M-3M', label: 'Under 3M AED' },
    { id: '3M-7M', label: '3M - 7M AED' },
    { id: '7M-15M', label: '7M - 15M AED' },
    { id: '15M+', label: '15M+ AED Mega Projects' },
  ];

  const filteredProjects = mockOffPlanProjects.filter((p) => {
    if (developerFilter !== 'All' && !p.developer.toLowerCase().includes(developerFilter.toLowerCase())) {
      return false;
    }

    if (budgetTier === '1M-3M') {
      if (p.startingPriceAed >= 3000000) return false;
    } else if (budgetTier === '3M-7M') {
      if (p.startingPriceAed < 3000000 || p.startingPriceAed > 7000000) return false;
    } else if (budgetTier === '7M-15M') {
      if (p.startingPriceAed < 7000000 || p.startingPriceAed > 15000000) return false;
    } else if (budgetTier === '15M+') {
      if (p.startingPriceAed < 15000000) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-12 overflow-x-hidden">
      
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4 max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-[0.2em]">
          <Building2 className="w-3.5 h-3.5 text-blue-400" />
          {t.offPlan.title}
        </div>

        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide">
          OFFICIAL DEVELOPER MEGA-PROJECTS
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed">
          {t.offPlan.subtitle}
        </p>

        {/* Budget Category Filters */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
          {budgetTiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setBudgetTier(tier.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all min-h-[38px] ${
                budgetTier === tier.id
                  ? 'bg-blue-600 text-white border border-blue-400 font-bold shadow-lg shadow-blue-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {tier.label}
            </button>
          ))}
        </div>

        {/* Developer Filters */}
        <div className="pt-1 flex flex-wrap items-center justify-center gap-2">
          <span className="text-[10px] uppercase font-mono text-slate-500 font-bold mr-2">Developer:</span>
          {developers.map((dev) => (
            <button
              key={dev}
              onClick={() => setDeveloperFilter(dev)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all min-h-[36px] ${
                developerFilter === dev
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {dev}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid with Motion */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/90 text-blue-300 border border-slate-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {project.developer}
                  </div>
                  {project.goldenVisaEligible && (
                    <div className="absolute top-3 right-3 bg-blue-600 text-white font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider shadow-md">
                      Golden Visa
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs text-blue-400 font-mono flex items-center gap-1 mb-1 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      {project.location}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-slate-100 group-hover:text-blue-300 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Attributes */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">{t.offPlan.startingFrom}:</span>
                      <span className="font-serif font-bold text-base text-white">
                        {formatPrice(project.startingPriceAed)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">{t.offPlan.paymentPlan}:</span>
                      <span className="font-semibold text-slate-200">{project.paymentPlan}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">{t.offPlan.handover}:</span>
                      <span className="font-mono text-slate-300">{project.handoverDate}</span>
                    </div>
                  </div>

                  {/* Units List */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      Available Configurations:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.unitsAvailable.map((unit, unitIdx) => (
                        <span
                          key={unitIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300"
                        >
                          {unit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={onOpenLeadPopup}
                  className="w-full py-3.5 bg-blue-glow-btn text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 hover:brightness-110 transition-all min-h-[44px]"
                >
                  <Download className="w-4 h-4 text-blue-200" />
                  {t.offPlan.requestBrochure}
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
