import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Grid, Map as MapIcon, X, Check, ShieldCheck, Phone, Sparkles, Building2 } from 'lucide-react';
import { mockProperties } from '../data/mockData';
import { Property } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UaeInteractiveMap } from '../components/UaeInteractiveMap';

interface PropertiesPageProps {
  onOpenLeadPopup: () => void;
  selectedProperty: Property | null;
  onSelectProperty: (property: Property | null) => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({
  onOpenLeadPopup,
  selectedProperty,
  onSelectProperty,
}) => {
  const { formatPrice, t } = useLanguage();

  // Filter state
  const [cityFilter, setCityFilter] = useState<string>('All');
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const [goldenVisaOnly, setGoldenVisaOnly] = useState<boolean>(false);
  const [budgetTier, setBudgetTier] = useState<string>('All');

  // View mode: 'grid' | 'split'
  const [viewMode, setViewMode] = useState<'grid' | 'split'>('split');
  const [activeMapMarker, setActiveMapMarker] = useState<Property | null>(null);

  const budgetTiers = [
    { id: 'All', label: 'All Budgets' },
    { id: '1M-3M', label: '1M - 3M AED' },
    { id: '3M-7M', label: '3M - 7M AED' },
    { id: '7M-15M', label: '7M - 15M AED' },
    { id: '15M-50M', label: '15M - 50M AED' },
    { id: '50M+', label: '50M+ AED' },
  ];

  const filteredProperties = mockProperties.filter((p) => {
    if (cityFilter !== 'All' && p.city !== cityFilter) return false;
    if (typeFilter !== 'All' && p.type !== typeFilter) return false;
    if (goldenVisaOnly && !p.goldenVisaEligible) return false;

    if (budgetTier === '1M-3M') {
      if (p.priceAed < 1000000 || p.priceAed > 3000000) return false;
    } else if (budgetTier === '3M-7M') {
      if (p.priceAed < 3000000 || p.priceAed > 7000000) return false;
    } else if (budgetTier === '7M-15M') {
      if (p.priceAed < 7000000 || p.priceAed > 15000000) return false;
    } else if (budgetTier === '15M-50M') {
      if (p.priceAed < 15000000 || p.priceAed > 50000000) return false;
    } else if (budgetTier === '50M+') {
      if (p.priceAed < 50000000) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 md:px-8 max-w-7xl mx-auto space-y-8 overflow-x-hidden">
      
      {/* Header & Filter Controls */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
              <Building2 className="w-3.5 h-3.5 text-blue-400" />
              <span>HAVEST REAL ESTATE PORTFOLIO</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide">
              PRIME UAE LUXURY LISTINGS
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Showing {filteredProperties.length} verified ultra-luxury residences across all price categories from 1M to 150M+ AED.
            </p>
          </div>

          {/* View Mode Buttons */}
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-1.5 rounded-xl self-start md:self-auto shadow-md">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors min-h-[38px] ${
                viewMode === 'grid' ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode('split')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors min-h-[38px] ${
                viewMode === 'split' ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <MapIcon className="w-4 h-4" />
              <span>Split Map Search</span>
            </button>
          </div>
        </div>

        {/* Budget Category Filters */}
        <div className="space-y-2">
          <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-blue-400 font-bold block">
            Filter by Investment Category / Price Tier:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {budgetTiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setBudgetTier(tier.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all min-h-[38px] ${
                  budgetTier === tier.id
                    ? 'bg-blue-600 text-white border border-blue-400 shadow-lg shadow-blue-500/20 font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>
        </div>

        {/* Location & Specification Filter Bar */}
        <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800/90 flex flex-wrap items-center gap-4 text-xs shadow-xl">
          {/* City Filter */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 uppercase font-semibold text-[10px]">City:</span>
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:border-blue-500 focus:outline-none min-h-[38px]"
            >
              <option value="All">All UAE Cities</option>
              <option value="Abu Dhabi">Abu Dhabi</option>
              <option value="Dubai">Dubai</option>
              <option value="Ras Al Khaimah">Ras Al Khaimah</option>
            </select>
          </div>

          {/* Type Filter */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 uppercase font-semibold text-[10px]">Property Type:</span>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:border-blue-500 focus:outline-none min-h-[38px]"
            >
              <option value="All">All Property Types</option>
              <option value="Mansion">Mansion</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Villa">Villa</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>

          {/* Golden Visa Checkbox */}
          <label className="flex items-center gap-2 cursor-pointer bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 hover:border-blue-500/50 min-h-[38px]">
            <input
              type="checkbox"
              checked={goldenVisaOnly}
              onChange={(e) => setGoldenVisaOnly(e.target.checked)}
              className="accent-blue-600 w-4 h-4"
            />
            <span className="text-slate-200 font-semibold">Golden Visa Eligible Only</span>
          </label>
        </div>
      </div>

      {/* Main Listing & Interactive Map View */}
      <div className={`grid gap-8 ${viewMode === 'split' ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1'}`}>
        
        {/* Listings Column */}
        <div className={`${viewMode === 'split' ? 'lg:col-span-7' : 'w-full'} space-y-6`}>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProperties.map((property, idx) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  onClick={() => {
                    setActiveMapMarker(property);
                    onSelectProperty(property);
                  }}
                  className={`group bg-slate-900/90 rounded-2xl overflow-hidden border transition-all cursor-pointer shadow-xl flex flex-col justify-between ${
                    activeMapMarker?.id === property.id
                      ? 'border-blue-500 ring-2 ring-blue-500/30'
                      : 'border-slate-800 hover:border-blue-500/40'
                  }`}
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                      <img
                        src={property.imageUrl}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-slate-950/90 text-blue-300 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider border border-slate-700 shadow-md">
                        {property.type}
                      </div>

                      {property.goldenVisaEligible && (
                        <div className="absolute top-3 right-3 bg-blue-600 text-white font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-wider shadow-lg">
                          Golden Visa
                        </div>
                      )}
                    </div>

                    <div className="p-5 space-y-2">
                      <div className="text-xs text-blue-400 font-mono flex items-center gap-1.5 font-semibold">
                        <MapPin className="w-3.5 h-3.5 text-blue-400" />
                        <span>{property.location}</span>
                      </div>

                      <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-blue-300 transition-colors">
                        {property.title}
                      </h3>

                      <div className="text-2xl font-serif font-bold text-white">
                        {formatPrice(property.priceAed)}
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                        <span>{property.beds} Beds</span>
                        <span>{property.baths} Baths</span>
                        <span>{property.areaSqFt.toLocaleString()} Sq.Ft</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProperty(property);
                      }}
                      className="w-full py-3 bg-slate-800 hover:bg-blue-600 hover:text-white font-bold text-xs uppercase tracking-wider text-slate-200 rounded-xl transition-colors min-h-[44px]"
                    >
                      View Residence Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Interactive Map Layout Column */}
        {viewMode === 'split' && (
          <div className="lg:col-span-5 h-[650px] sticky top-24 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 relative shadow-2xl flex flex-col">
            
            {/* Map Canvas Header */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between text-xs">
              <span className="font-serif font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <MapIcon className="w-4 h-4 text-blue-400" />
                UAE Interactive Map Search
              </span>
              <span className="text-[11px] text-slate-300 font-sans font-semibold tracking-wide tabular-nums">
                {filteredProperties.length} Properties On Map
              </span>
            </div>

            {/* Real Interactive Leaflet Map */}
            <div className="flex-1 w-full h-full relative">
              <UaeInteractiveMap
                properties={filteredProperties}
                selectedProperty={selectedProperty}
                onSelectProperty={(prop) => {
                  setActiveMapMarker(prop);
                  onSelectProperty(prop);
                }}
                className="w-full h-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Property Detail Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 text-slate-100 shadow-2xl my-auto"
            >
              <button
                onClick={() => onSelectProperty(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase font-mono text-blue-400 block mb-1 font-semibold">
                    {selectedProperty.location}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-serif font-bold text-white">
                    {selectedProperty.title}
                  </h2>
                  <div className="text-2xl font-serif font-bold text-white mt-2">
                    {formatPrice(selectedProperty.priceAed)}
                  </div>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img
                    src={selectedProperty.imageUrl}
                    alt={selectedProperty.title}
                    className="w-full h-64 object-cover rounded-xl border border-slate-800"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProperty.gallery.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt="Gallery detail"
                        className="w-full h-30 object-cover rounded-lg border border-slate-800"
                      />
                    ))}
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800 text-center text-xs">
                  <div>
                    <span className="text-slate-400 block uppercase">Bedrooms</span>
                    <strong className="text-base text-white">{selectedProperty.beds}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block uppercase">Bathrooms</span>
                    <strong className="text-base text-white">{selectedProperty.baths}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block uppercase">Built-Up Area</span>
                    <strong className="text-base text-white">{selectedProperty.areaSqFt.toLocaleString()} Sq.Ft</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block uppercase">Golden Visa</span>
                    <strong className="text-base text-emerald-400">
                      {selectedProperty.goldenVisaEligible ? 'Eligible' : 'Standard'}
                    </strong>
                  </div>
                </div>

                {/* Description & Amenities */}
                <div className="space-y-3">
                  <h3 className="text-sm uppercase font-bold text-white font-serif">
                    Residence Description
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProperty.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm uppercase font-bold text-white font-serif">
                    Exclusive Residence Amenities
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProperty.amenities.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-1.5"
                      >
                        <Check className="w-3.5 h-3.5 text-blue-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Controls */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      onSelectProperty(null);
                      onOpenLeadPopup();
                    }}
                    className="flex-1 py-3.5 bg-blue-glow-btn text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <Sparkles className="w-4 h-4 text-blue-200" />
                    Schedule Private Viewing
                  </button>
                  <a
                    href="tel:+971505002896"
                    className="py-3.5 px-6 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <Phone className="w-4 h-4 text-blue-400" />
                    Call Senior Advisory
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
