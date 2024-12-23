// src/utils/images.ts
import { CountryCode } from './countries';

// Configuration des images par pays
export const generateCountryImagePaths = (countryCode: CountryCode): string[] => {
  // On ne génère que 3 chemins puisque nous avons 3 images pour l'instant
  return Array.from({ length: 3 }, (_, index) => (
    `/images/countries/${countryCode.toLowerCase()}/${index + 1}.jpg`
  ));
};

// Obtenir une image aléatoire pour un pays
export const getRandomImage = (countryCode: CountryCode): string => {
  // Pour le moment, on ne prend qu'une des 3 images
  const randomIndex = Math.floor(Math.random() * 3) + 1;
  return `/images/countries/${countryCode.toLowerCase()}/${randomIndex}.jpg`;
};

// Vérifier si une image existe
export const checkImageExists = async (path: string): Promise<boolean> => {
  try {
    const response = await fetch(path, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};
// Convention de nommage des fichiers :
/*
public/
  images/
    countries/
      jp/
        1.jpg  - personne 1
        2.jpg  - personne 2
        3.jpg  - personne 3
        ...
      kr/
        1.jpg
        2.jpg
        3.jpg
        ...
*/