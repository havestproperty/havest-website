import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Building2, DollarSign, Sparkles, ArrowRight, Shield, Award, CheckCircle, ExternalLink, Bed, Bath, Maximize } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { mockProperties, mockOffPlanProjects } from '../data/mockData';
import { Property, OffPlanProject } from '../types';
import { FaqSection } from '../components/FaqSection';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
  onOpenLeadPopup: () => void;
  onSelectProperty: (property: Property) => void;
  onSelectOffPlan: (project: OffPlanProject) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentPage,
  onOpenLeadPopup,
  onSelectProperty,
  onSelectOffPlan,
}) => {
  const { t, formatPrice } = useLanguage();

  // Search Filter State
  const [searchLocation, setSearchLocation] = useState('');
  const [propertyType, setPropertyType] = useState('All');
  const [priceMax, setPriceMax] = useState('150000000');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage('properties');
  };

  return (
    <div className="space-y-0 text-slate-100 overflow-x-hidden">
      
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-8 pb-20 px-4 md:px-8">
        {/* Background Image / Video Fallback */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2000&auto=format&fit=crop"
            alt="Abu Dhabi & UAE Architecture"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent opacity-80" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 mt-4">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest shadow-xl backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>HAVEST PROPERTIES UAE • ABU DHABI & DUBAI LUXURY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white leading-[1.08]"
          >
            DISCOVER YOUR <br />
            <span className="text-blue-gradient italic">EXCEPTIONAL HOME</span> <br />
            IN THE UAE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light px-2"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* Floating Advanced Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-4 max-w-4xl mx-auto relative z-20"
          >
            <form
              onSubmit={handleSearchSubmit}
              className="glass-panel-blue rounded-2xl p-4 md:p-6 shadow-2xl space-y-4 text-left border border-blue-500/30"
            >
              {/* Tabs */}
              <div className="flex items-center gap-2 border-b border-slate-800/80 pb-3 text-xs font-semibold uppercase tracking-wider">
                <span className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white font-bold border border-blue-400/40">
                  {t.hero.searchTabBuy}
                </span>
                <span className="px-3.5 py-1.5 text-slate-400 hover:text-slate-200 cursor-pointer">
                  {t.hero.searchTabRent}
                </span>
                <span className="px-3.5 py-1.5 text-slate-400 hover:text-slate-200 cursor-pointer">
                  {t.hero.searchTabOffPlan}
                </span>
              </div>

              {/* Input Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Location */}
                <div>
                  <label className="block text-[11px] uppercase font-bold text-blue-300 mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    {t.hero.locationLabel}
                  </label>
                  <input
                    type="text"
                    placeholder="Saadiyat, Yas Island, Palm Jumeirah..."
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950/90 border border-slate-800 rounded-xl text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-[11px] uppercase font-bold text-blue-300 mb-1 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-blue-400" />
                    {t.hero.propertyTypeLabel}
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950/90 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="All">{t.hero.allTypes}</option>
                    <option value="Mansion">Royal Mansion</option>
                    <option value="Penthouse">Sky Penthouse</option>
                    <option value="Villa">Beachfront Villa</option>
                    <option value="Apartment">Luxury Apartment</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-[11px] uppercase font-bold text-blue-300 mb-1 flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-blue-400" />
                    {t.hero.priceRangeLabel}
                  </label>
                  <select
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950/90 border border-slate-800 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="150000000">Up to 150 Million AED</option>
                    <option value="50000000">Up to 50 Million AED</option>
                    <option value="25000000">Up to 25 Million AED</option>
                    <option value="10000000">Up to 10 Million AED</option>
                  </select>
                </div>
              </div>

              {/* Submit Search Button */}
              <button
                type="submit"
                id="hero-search-btn"
                className="w-full py-3.5 px-6 rounded-xl bg-blue-glow-btn text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 hover:brightness-110 transition-all min-h-[48px]"
              >
                <Search className="w-4 h-4 text-blue-200" />
                <span>{t.hero.searchButton}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Brand Key Statistics Banner */}
      <section className="bg-slate-900/90 border-y border-slate-800/80 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { number: t.stats.transacted, label: t.stats.transactedLabel },
            { number: t.stats.portfolio, label: t.stats.portfolioLabel },
            { number: t.stats.goldenVisa, label: t.stats.goldenVisaLabel },
            { number: t.stats.satisfaction, label: t.stats.satisfactionLabel },
          ].map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-5xl font-serif font-bold text-white">
                {stat.number}
              </div>
              <div className="text-xs uppercase font-semibold text-blue-400 tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Luxury Residences */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-blue-400">
              PRIME ABU DHABI & UAE REAL ESTATE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
              {t.home.featuredTitle}
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
              {t.home.featuredSubtitle}
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('properties')}
            id="view-all-properties-btn"
            className="px-6 py-3.5 rounded-xl border border-blue-500/40 hover:bg-blue-600/20 text-blue-300 font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors w-fit min-h-[44px]"
          >
            <span>{t.home.viewAllProperties}</span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </button>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProperties.slice(0, 6).map((property) => (
            <motion.div
              key={property.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 shadow-xl flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950/90 text-blue-300 text-[10px] font-bold uppercase tracking-wider border border-blue-500/30 backdrop-blur-md">
                    {property.type}
                  </span>
                  {property.goldenVisaEligible && (
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                      Golden Visa
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="text-xl font-serif font-bold text-white drop-shadow">
                    {formatPrice(property.priceAed)}
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-blue-300 font-sans font-semibold flex items-center gap-1.5 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{property.location}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-100 group-hover:text-blue-300 transition-colors">
                    {property.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-2 leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {/* Specs */}
                <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center text-xs text-slate-300">
                  <div className="flex flex-col items-center">
                    <span className="text-slate-500 text-[10px] uppercase">{t.property.beds}</span>
                    <span className="font-bold">{property.beds}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-slate-500 text-[10px] uppercase">{t.property.baths}</span>
                    <span className="font-bold">{property.baths}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-slate-500 text-[10px] uppercase">{t.property.sqft}</span>
                    <span className="font-bold">{property.areaSqFt.toLocaleString()}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => {
                      onSelectProperty(property);
                      setCurrentPage('properties');
                    }}
                    className="w-full py-3 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white font-semibold text-xs uppercase tracking-wider text-slate-200 transition-colors min-h-[44px]"
                  >
                    {t.property.keyDetails}
                  </button>
                  <button
                    onClick={onOpenLeadPopup}
                    className="p-3 rounded-xl bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    title="Inquire Private VIP"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Developer Mega-Projects (Off-Plan Section) */}
      <section className="py-20 bg-slate-950 border-t border-slate-800/80 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-blue-400">
                OFFICIAL ABU DHABI & UAE DEVELOPER ALLOCATIONS
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
                {t.home.offPlanTitle}
              </h2>
              <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
                {t.home.offPlanSubtitle}
              </p>
            </div>

            <button
              onClick={() => setCurrentPage('offplan')}
              id="explore-offplan-btn"
              className="px-6 py-3.5 rounded-xl bg-blue-glow-btn text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all w-fit min-h-[44px]"
            >
              {t.home.exploreOffPlan}
            </button>
          </div>

          {/* Off-Plan Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockOffPlanProjects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-colors shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.heroImage}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/90 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      Developer: {project.developer}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-xs text-blue-400 font-mono font-semibold">{project.location}</div>
                    <h3 className="text-2xl font-serif font-bold text-slate-100">{project.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{project.description}</p>

                    <div className="pt-4 space-y-2 text-xs border-t border-slate-800/80">
                      <div className="flex justify-between">
                        <span className="text-slate-400">{t.offPlan.startingFrom}:</span>
                        <span className="font-bold text-blue-300">{formatPrice(project.startingPriceAed)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">{t.offPlan.paymentPlan}:</span>
                        <span className="font-semibold text-slate-200">{project.paymentPlan}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">{t.offPlan.handover}:</span>
                        <span className="font-mono text-slate-300">{project.handoverDate}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={onOpenLeadPopup}
                    className="w-full py-3 rounded-xl border border-blue-500/40 hover:bg-blue-600/20 text-blue-300 font-semibold text-xs uppercase tracking-wider transition-colors min-h-[44px]"
                  >
                    {t.offPlan.requestBrochure}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Developer Logo Strip */}
          <div className="pt-12 border-t border-slate-800/80 text-center space-y-6">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-blue-400">
              {t.home.developerPartners}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-80 font-serif font-bold text-xl md:text-2xl text-slate-400">
              <span>ALDAR</span>
              <span>EMAAR</span>
              <span>EAGLE HILLS</span>
              <span>MODON</span>
              <span>SOBHA</span>
              <span>NAKHEEL</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10-Question FAQ Accordion Component */}
      <FaqSection />
    </div>
  );
};
