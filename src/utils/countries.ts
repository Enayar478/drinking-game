// src/utils/countries.ts

export type CountryCode = 
  | 'JP' | 'KR' | 'CN' | 'TW' | 'MN'  // Asie de l'Est
  | 'TH' | 'VN' | 'PH' | 'MY' | 'ID'  // Asie du Sud-Est
  | 'SE' | 'NO' | 'DK' | 'FI' | 'IS'  // Europe du Nord
  | 'CO' | 'VE' | 'PE' | 'EC' | 'CL'  // Amérique Latine
  | 'SN' | 'ML' | 'NG' | 'CM' | 'CI'; // Afrique

export type Region = 'eastAsia' | 'southeastAsia' | 'northEurope' | 'latinAmerica' | 'africa';

export interface Country {
  name: string;
  flag: string;
  code: CountryCode;
  region: Region;
  images: string[];
}

export const COUNTRIES: Record<CountryCode, Country> = {
  // Asie de l'Est
  JP: { name: "Japan", flag: "🇯🇵", code: "JP", region: "eastAsia", images: [] },
  KR: { name: "South Korea", flag: "🇰🇷", code: "KR", region: "eastAsia", images: [] },
  CN: { name: "China", flag: "🇨🇳", code: "CN", region: "eastAsia", images: [] },
  TW: { name: "Taiwan", flag: "🇹🇼", code: "TW", region: "eastAsia", images: [] },
  MN: { name: "Mongolia", flag: "🇲🇳", code: "MN", region: "eastAsia", images: [] },

  // Asie du Sud-Est
  TH: { name: "Thailand", flag: "🇹🇭", code: "TH", region: "southeastAsia", images: [] },
  VN: { name: "Vietnam", flag: "🇻🇳", code: "VN", region: "southeastAsia", images: [] },
  PH: { name: "Philippines", flag: "🇵🇭", code: "PH", region: "southeastAsia", images: [] },
  MY: { name: "Malaysia", flag: "🇲🇾", code: "MY", region: "southeastAsia", images: [] },
  ID: { name: "Indonesia", flag: "🇮🇩", code: "ID", region: "southeastAsia", images: [] },

  // Europe du Nord
  SE: { name: "Sweden", flag: "🇸🇪", code: "SE", region: "northEurope", images: [] },
  NO: { name: "Norway", flag: "🇳🇴", code: "NO", region: "northEurope", images: [] },
  DK: { name: "Denmark", flag: "🇩🇰", code: "DK", region: "northEurope", images: [] },
  FI: { name: "Finland", flag: "🇫🇮", code: "FI", region: "northEurope", images: [] },
  IS: { name: "Iceland", flag: "🇮🇸", code: "IS", region: "northEurope", images: [] },

  // Amérique Latine
  CO: { name: "Colombia", flag: "🇨🇴", code: "CO", region: "latinAmerica", images: [] },
  VE: { name: "Venezuela", flag: "🇻🇪", code: "VE", region: "latinAmerica", images: [] },
  PE: { name: "Peru", flag: "🇵🇪", code: "PE", region: "latinAmerica", images: [] },
  EC: { name: "Ecuador", flag: "🇪🇨", code: "EC", region: "latinAmerica", images: [] },
  CL: { name: "Chile", flag: "🇨🇱", code: "CL", region: "latinAmerica", images: [] },

  // Afrique
  SN: { name: "Senegal", flag: "🇸🇳", code: "SN", region: "africa", images: [] },
  ML: { name: "Mali", flag: "🇲🇱", code: "ML", region: "africa", images: [] },
  NG: { name: "Nigeria", flag: "🇳🇬", code: "NG", region: "africa", images: [] },
  CM: { name: "Cameroon", flag: "🇨🇲", code: "CM", region: "africa", images: [] },
  CI: { name: "Ivory Coast", flag: "🇨🇮", code: "CI", region: "africa", images: [] },
};

// Utilitaire pour obtenir les pays par région
export const getCountriesByRegion = (region: Region): Country[] => {
  return Object.values(COUNTRIES).filter(country => country.region === region);
};

// Utilitaire pour obtenir un pays aléatoire
export const getRandomCountry = (excludedCodes?: CountryCode[]): Country => {
  const availableCountries = Object.values(COUNTRIES).filter(
    country => !excludedCodes?.includes(country.code)
  );
  return availableCountries[Math.floor(Math.random() * availableCountries.length)];
};