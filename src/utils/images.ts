// src/utils/images.ts
import { CountryCode } from './countries';

// Mots-clés de recherche pour chaque pays (pour Unsplash)
const COUNTRY_KEYWORDS: Record<CountryCode, string[]> = {
  // East Asia
  JP: ['japan', 'tokyo', 'kyoto', 'japanese'],
  KR: ['south korea', 'seoul', 'korean'],
  CN: ['china', 'beijing', 'chinese'],
  TW: ['taiwan', 'taipei', 'taiwanese'],
  MN: ['mongolia', 'ulaanbaatar', 'mongolian'],

  // Southeast Asia
  TH: ['thailand', 'bangkok', 'thai'],
  VN: ['vietnam', 'hanoi', 'vietnamese'],
  PH: ['philippines', 'manila', 'filipino'],
  MY: ['malaysia', 'kuala lumpur', 'malaysian'],
  ID: ['indonesia', 'jakarta', 'indonesian'],

  // Northern Europe
  SE: ['sweden', 'stockholm', 'swedish'],
  NO: ['norway', 'oslo', 'norwegian'],
  DK: ['denmark', 'copenhagen', 'danish'],
  FI: ['finland', 'helsinki', 'finnish'],
  IS: ['iceland', 'reykjavik', 'icelandic'],

  // Latin America
  CO: ['colombia', 'bogota', 'colombian'],
  VE: ['venezuela', 'caracas', 'venezuelan'],
  PE: ['peru', 'lima', 'peruvian'],
  EC: ['ecuador', 'quito', 'ecuadorian'],
  CL: ['chile', 'santiago', 'chilean'],

  // Africa
  SN: ['senegal', 'dakar', 'senegalese'],
  ML: ['mali', 'bamako', 'malian'],
  NG: ['nigeria', 'lagos', 'nigerian'],
  CM: ['cameroon', 'yaounde', 'cameroonian'],
  CI: ['ivory coast', 'abidjan', 'ivorian'],
};

// Cache pour stocker les URLs générées
const imageCache = new Map<string, string>();

// Configuration des images par pays
export const generateCountryImagePaths = (countryCode: CountryCode): string[] => {
  return Array.from({ length: 5 }, (_, index) => (
    `/images/countries/${countryCode.toLowerCase()}/${index + 1}.jpg`
  ));
};

// Obtenir une image de placeholder pour un pays
const getPlaceholderImage = (countryCode: CountryCode, seed: number): string => {
  const cacheKey = `${countryCode}-${seed}`;

  // Vérifier le cache
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!;
  }

  // Utiliser Picsum avec seed - Format carré 400x400 pour chargement ultra rapide
  const imageId = `${countryCode}-${seed}`;
  const url = `https://picsum.photos/seed/${imageId}/400/400`;

  imageCache.set(cacheKey, url);
  return url;
};

// Obtenir une image aléatoire pour un pays
export const getRandomImage = (countryCode: CountryCode): string => {
  const seed = Math.floor(Math.random() * 1000);

  // Pour les pays avec des images locales (JP et KR pour l'instant)
  if (countryCode === 'JP' || countryCode === 'KR') {
    const randomIndex = Math.floor(Math.random() * 3) + 1;
    return `/images/countries/${countryCode.toLowerCase()}/${randomIndex}.jpg`;
  }

  // Pour les autres pays, utiliser Lorem Picsum (plus fiable qu'Unsplash)
  return getPlaceholderImage(countryCode, seed);
};

// Vérifier si une image existe (pour les images locales)
export const checkImageExists = async (path: string): Promise<boolean> => {
  try {
    const response = await fetch(path, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};