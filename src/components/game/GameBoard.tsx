// src/components/game/GameBoard.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useGameStore } from '@/store/gameStore';
import { COUNTRIES, CountryCode } from '@/utils/countries';
import { getRandomImage } from '@/utils/images';
import { Beer, Sparkles } from 'lucide-react';

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
  const [showFeedback, setShowFeedback] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Charge une nouvelle image
  const loadNewImage = () => {
    setIsLoading(true);
    setImageError(false);
    setImageLoaded(false);
    setShowFeedback(false);

    // Sélectionne un pays aléatoire parmi les deux sélectionnés
    const randomCountry = selectedCountries[Math.floor(Math.random() * 2)];
    setCorrectAnswer(randomCountry);

    // Obtient une image aléatoire pour ce pays
    const imagePath = getRandomImage(randomCountry);
    setCurrentImage(imagePath);
  };

  useEffect(() => {
    loadNewImage();
  }, [currentImageIndex]);

  const handleImageError = () => {
    setImageError(true);
    setTimeout(loadNewImage, 1000);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setIsLoading(false);
  };

  const handleAnswer = (countryCode: CountryCode) => {
    if (countryCode === correctAnswer) {
      // Vibration pour bonne réponse (si supporté)
      if ('vibrate' in navigator) {
        navigator.vibrate(100);
      }

      // Effet visuel de succès
      setShowFeedback(true);
      setTimeout(() => {
        incrementSips();
        loadNewImage();
      }, 500);
    } else {
      // Vibration pour mauvaise réponse (si supporté)
      if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 100]);
      }

      setGameState('gameOver');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4">
      <div className="max-w-md mx-auto">
        {/* Header avec score */}
        <div className="flex items-center justify-between mb-6 bg-black/30 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
          <div>
            <h1 className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              CULTURESIPS
            </h1>
            <p className="text-xs text-slate-400 mt-1">Devinez le pays !</p>
          </div>
          <div className="flex items-center gap-3 bg-orange-500/20 px-4 py-2 rounded-full border border-orange-500/30">
            <Beer className="w-6 h-6 text-orange-400 animate-bounce" />
            <span className="text-2xl font-black text-orange-400">{sips}</span>
          </div>
        </div>

        {/* Zone d'image avec animations */}
        <div className="mb-6 relative">
          <div className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border-2 transition-all duration-300 ${
            showFeedback ? 'border-green-500 scale-105' : 'border-white/10'
          }`}>
            {isLoading || imageError ? (
              <div className="aspect-[3/4] bg-gradient-to-br from-slate-700 to-slate-800 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-slate-400 animate-pulse">
                  {imageError ? "Nouvelle image..." : "Chargement..."}
                </p>
              </div>
            ) : (
              <div className="aspect-[3/4] bg-slate-700 relative overflow-hidden">
                {currentImage && (
                  <>
                    <img
                      src={currentImage}
                      alt="Devinez le pays"
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                    {showFeedback && (
                      <div className="absolute inset-0 bg-green-500/30 flex items-center justify-center">
                        <Sparkles className="w-24 h-24 text-green-400 animate-pulse" />
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Boutons de réponse */}
        <div className="grid grid-cols-2 gap-4">
          {selectedCountries.map((countryCode) => (
            <button
              key={countryCode}
              onClick={() => handleAnswer(countryCode)}
              disabled={isLoading || imageError || showFeedback}
              className="group relative bg-gradient-to-br from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 disabled:from-slate-700 disabled:to-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:scale-100 shadow-lg hover:shadow-2xl border-2 border-white/10 disabled:opacity-50"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform">
                {COUNTRIES[countryCode].flag}
              </span>
              <span className="font-bold text-sm text-center">
                {COUNTRIES[countryCode].name}
              </span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-2xl transition-colors"></div>
            </button>
          ))}
        </div>

        {/* Indicateur de progression */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            {sips === 1 ? 'Premier essai !' : `${sips - 1} bonnes réponses 🔥`}
          </p>
        </div>
      </div>
    </div>
  );
}