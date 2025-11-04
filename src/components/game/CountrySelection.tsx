// src/components/game/CountrySelection.tsx
'use client';

import React from 'react';
import { useGameStore } from '@/store/gameStore';
import { COUNTRIES, CountryCode } from '@/utils/countries';
import { Beer, Globe, Sparkles, Play } from 'lucide-react';

export function CountrySelection() {
  const { selectedCountries, setSelectedCountries, setGameState } = useGameStore();

  const handleCountrySelect = (countryCode: CountryCode) => {
    if (selectedCountries.includes(countryCode)) {
      setSelectedCountries(selectedCountries.filter(c => c !== countryCode));
    } else if (selectedCountries.length < 2) {
      setSelectedCountries([...selectedCountries, countryCode]);
    }
  };

  const handleStartGame = () => {
    if (selectedCountries.length === 2) {
      setGameState('playing');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-3 flex flex-col">
      <div className="max-w-2xl mx-auto w-full flex flex-col h-full">
        {/* Header - Compact */}
        <div className="text-center mb-3 pt-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Beer className="w-8 h-8 text-orange-400 animate-bounce" />
            <h1 className="text-4xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              CULTURESIPS
            </h1>
            <Globe className="w-8 h-8 text-blue-400 animate-pulse" />
          </div>
          <p className="text-slate-300 text-sm">
            Testez vos connaissances culturelles !
          </p>
        </div>

        {/* Instructions - Compact */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-3 mb-3 border border-white/10">
          <div className="flex items-start gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <h2 className="text-base font-bold mb-1">Comment jouer ?</h2>
              <ol className="text-xs text-slate-300 space-y-0.5">
                <li>1️⃣ Choisissez 2 pays • 2️⃣ Devinez le pays</li>
                <li>3️⃣ Bonne réponse = +1 🍺 • 4️⃣ Erreur = buvez tout !</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Pays sélectionnés */}
        {selectedCountries.length > 0 && (
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 mb-3 border border-orange-500/30">
            <div className="flex items-center justify-center gap-6">
              {selectedCountries.map((code, index) => (
                <React.Fragment key={code}>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-5xl animate-bounce">{COUNTRIES[code].flag}</span>
                    <span className="text-sm font-bold text-orange-400">{COUNTRIES[code].name}</span>
                  </div>
                  {index === 0 && selectedCountries.length === 2 && (
                    <span className="text-3xl font-black text-orange-400">VS</span>
                  )}
                </React.Fragment>
              ))}
              {selectedCountries.length === 1 && (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate-600 flex items-center justify-center">
                    <span className="text-slate-600 text-2xl">?</span>
                  </div>
                  <span className="text-xs text-slate-500">Choisissez un 2ème pays</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Grille de pays - Optimisée pour mobile */}
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-3 mb-3 border border-white/10 flex-1 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[calc(100vh-380px)] overflow-y-auto pr-1">
            {Object.entries(COUNTRIES).map(([code, country]) => {
              const isSelected = selectedCountries.includes(code as CountryCode);
              return (
                <button
                  key={code}
                  onClick={() => handleCountrySelect(code as CountryCode)}
                  className={`
                    relative flex items-center justify-center gap-1.5 p-3 rounded-lg
                    transition-all duration-200 transform hover:scale-105 active:scale-95
                    ${isSelected
                      ? 'bg-gradient-to-br from-orange-500 to-red-500 shadow-lg shadow-orange-500/50 border-2 border-orange-300'
                      : 'bg-slate-700/50 hover:bg-slate-600/50 border-2 border-white/5'}
                  `}
                >
                  <span className="text-2xl">{country.flag}</span>
                  <span className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {country.name}
                  </span>
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs">✓</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bouton de démarrage - Fixe en bas */}
        <button
          onClick={handleStartGame}
          disabled={selectedCountries.length !== 2}
          className={`
            w-full p-4 rounded-xl font-bold text-base
            transition-all duration-300 transform
            ${selectedCountries.length === 2
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-green-500/50 hover:scale-105 active:scale-95 border-2 border-green-300'
              : 'bg-slate-700/50 cursor-not-allowed opacity-50 border-2 border-white/5'}
          `}
        >
          <div className="flex items-center justify-center gap-2">
            {selectedCountries.length === 2 ? (
              <>
                <Play className="w-5 h-5" fill="currentColor" />
                <span>C&apos;est parti ! 🎉</span>
              </>
            ) : (
              <span className="text-sm">Sélectionnez 2 pays ({selectedCountries.length}/2)</span>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}