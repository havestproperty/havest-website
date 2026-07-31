import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: 'AED' | 'USD';
  setCurrency: (curr: 'AED' | 'USD') => void;
  t: typeof translations['en'];
  formatPrice: (priceAed: number) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [currency, setCurrency] = useState<'AED' | 'USD'>('AED');

  const isRtl = language === 'ar';

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language] || translations.en;

  const formatPrice = (priceAed: number) => {
    if (currency === 'USD') {
      const usd = Math.round(priceAed / 3.6725);
      return `$${usd.toLocaleString()}`;
    }
    return `${priceAed.toLocaleString()} AED`;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, currency, setCurrency, t, formatPrice, isRtl }}>
      <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
