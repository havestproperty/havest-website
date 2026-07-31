export type Language = 'en' | 'ar' | 'ru' | 'zh';

export type PropertyType = 'Penthouse' | 'Villa' | 'Mansion' | 'Apartment' | 'Townhouse';

export interface Property {
  id: string;
  title: string;
  location: string;
  city: 'Dubai' | 'Abu Dhabi' | 'Ras Al Khaimah';
  areaSqFt: number;
  beds: number;
  baths: number;
  priceAed: number;
  imageUrl: string;
  gallery: string[];
  type: PropertyType;
  featured: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
  developer: string;
  completionYear: number;
  goldenVisaEligible: boolean;
  amenities: string[];
  description: string;
  virtualTourUrl?: string;
}

export interface OffPlanProject {
  id: string;
  name: string;
  developer: string;
  location: string;
  city: 'Dubai' | 'Abu Dhabi' | 'Ras Al Khaimah';
  startingPriceAed: number;
  handoverDate: string;
  paymentPlan: string;
  goldenVisaEligible: boolean;
  heroImage: string;
  gallery: string[];
  description: string;
  unitsAvailable: string[];
}

export interface FAQItem {
  id: string;
  question: {
    en: string;
    ar: string;
    ru: string;
    zh: string;
  };
  answer: {
    en: string;
    ar: string;
    ru: string;
    zh: string;
  };
  category: 'Golden Visa' | 'Expat Ownership' | 'Investment & ROI' | 'Buying Process' | 'Off-Plan';
}
