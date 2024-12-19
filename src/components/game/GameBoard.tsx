import React, { useState, useEffect } from 'react';
import { useGameStore } from '@/store/gameStore';
import { CountryCode, getCountry } from '@/utils/countries';
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
  const [correctAnswer, setCorrectAnswer] = useState<CountryCode | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simule le chargement d'une nouvelle image
  const loadNewImage = () => {
    setIsLoading(true);
    // Ici, vous chargerez une vraie image de votre base de données
    // Pour l'instant, on simule juste un délai
    setTimeout(() => {
      const randomCountry = selectedCountries[Math.floor(Math.random() * selectedCountries.length)];
      setCorrectAnswer(randomCountry);
      setCurrentImage(`/images/countries/${randomCountry}/image${currentImageIndex}.jpg`);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    loadNewImage();
  }, [currentImageIndex, selectedCountries]);

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
          {isLoading ? (
            <div className="aspect-video bg-slate-700 animate-pulse flex items-center justify-center">
              Loading...
            </div>
          ) : (
            <div className="aspect-video bg-slate-700 relative">
              {/* Remplacer par votre composant Image ou img une fois les images ajoutées */}
              <div className="absolute inset-0 flex items-center justify-center">
                [Image Placeholder]
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {selectedCountries.map((countryCode) => {
            const country = getCountry(countryCode);
            return (
              <button
                key={countryCode}
                onClick={() => handleAnswer(countryCode)}
                className="bg-red-500 hover:bg-red-600 p-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
                disabled={isLoading}
              >
                <span className="text-2xl">{country.flag}</span>
                <span className="font-semibold">{country.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}