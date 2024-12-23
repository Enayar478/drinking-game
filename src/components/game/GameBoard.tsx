// src/components/game/GameBoard.tsx
import React, { useState, useEffect } from 'react';
import { useGameStore } from '@/store/gameStore';
import { COUNTRIES, CountryCode } from '@/utils/countries';
import { getRandomImage } from '@/utils/images';
import { Beer } from 'lucide-react';

export function GameBoard() {
  const { 
    selectedCountries, 
    sips, 
    incrementSips, 
    setGameState,
    currentImageIndex
  } = useGameStore();

  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<CountryCode>(selectedCountries[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Charge une nouvelle image
  const loadNewImage = () => {
    setIsLoading(true);
    setImageError(false);
    
    // Sélectionne un pays aléatoire parmi les deux sélectionnés
    const randomCountry = selectedCountries[Math.floor(Math.random() * 2)];
    setCorrectAnswer(randomCountry);
    
    // Obtient une image aléatoire pour ce pays
    const imagePath = getRandomImage(randomCountry);
    setCurrentImage(imagePath);
    setIsLoading(false);
  };

  useEffect(() => {
    loadNewImage();
  }, [currentImageIndex]);

  const handleImageError = () => {
    setImageError(true);
    // Recharger une nouvelle image après un petit délai
    setTimeout(loadNewImage, 1000);
  };

  const handleAnswer = (countryCode: CountryCode) => {
    if (countryCode === correctAnswer) {
      incrementSips();
      loadNewImage();
    } else {
      setGameState('gameOver');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">CULTURESIPS</h1>
          <div className="flex items-center space-x-2">
            <Beer className="w-6 h-6" />
            <span className="text-xl font-bold">{sips}</span>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg overflow-hidden mb-6">
          {isLoading || imageError ? (
            <div className="aspect-[3/4] bg-slate-700 animate-pulse flex items-center justify-center">
              {imageError ? "Chargement d'une nouvelle image..." : "Loading..."}
            </div>
          ) : (
            <div className="aspect-[3/4] bg-slate-700 relative">
              {currentImage && (
                <img 
                  src={currentImage} 
                  alt="Guess the country"
                  className="w-full h-full object-cover transition-opacity duration-300"
                  onError={handleImageError}
                />
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {selectedCountries.map((countryCode) => (
            <button
              key={countryCode}
              onClick={() => handleAnswer(countryCode)}
              className="bg-red-500 hover:bg-red-600 p-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
              disabled={isLoading || imageError}
            >
              <span className="text-2xl">{COUNTRIES[countryCode].flag}</span>
              <span className="font-semibold">{COUNTRIES[countryCode].name}</span>
            </button>
          ))}
        </div>

        {/* Debug info */}
        <div className="mt-4 text-slate-400 text-sm">
          <p>Current image: {currentImage}</p>
          <p>Correct answer: {COUNTRIES[correctAnswer]?.name}</p>
        </div>
      </div>
    </div>
  );
}