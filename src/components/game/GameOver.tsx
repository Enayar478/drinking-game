// src/components/game/GameOver.tsx
import React from 'react';
import { useGameStore } from '@/store/gameStore';
import { Beer } from 'lucide-react';
import { COUNTRIES } from '@/utils/countries';

export function GameOver() {
  const { sips, selectedCountries, resetGame, continueWithSameCountries } = useGameStore();

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4">
      <div className="max-w-md mx-auto pt-8">
        <div className="bg-slate-800 rounded-lg p-8 text-center">
          <h1 className="text-4xl font-bold mb-6 text-red-500">PERDU !</h1>
          
          {/* Message principal */}
          <div className="mb-8">
            <p className="text-2xl mb-4">Tu dois boire</p>
            <div className="flex items-center justify-center space-x-3">
              <Beer className="w-8 h-8" />
              <span className="text-5xl font-bold text-red-500">
                {sips}
              </span>
              <span className="text-2xl">gorgées</span>
            </div>
          </div>

          {/* Pays en jeu */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            {selectedCountries.map((code) => (
              <span key={code} className="text-3xl" title={COUNTRIES[code].name}>
                {COUNTRIES[code].flag}
              </span>
            ))}
          </div>

          {/* Boutons d'action */}
          <div className="space-y-4">
            <button
              onClick={continueWithSameCountries}
              className="w-full bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Continuer avec les mêmes pays
            </button>
            
            <button
              onClick={resetGame}
              className="w-full bg-slate-700 hover:bg-slate-600 text-white p-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Changer de pays
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}