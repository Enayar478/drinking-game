// src/components/game/GameOver.tsx
import React from 'react';
import { useGameStore } from '@/store/gameStore';
import { Beer } from 'lucide-react';
import { COUNTRIES } from '@/utils/countries';

export function GameOver() {
  const { sips, selectedCountries, resetGame } = useGameStore();

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4">
      <div className="max-w-md mx-auto pt-8">
        <div className="bg-slate-800 rounded-lg p-8 text-center">
          <h1 className="text-4xl font-bold mb-2">GAME OVER</h1>
          
          {/* Affichage des pays sélectionnés */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            {selectedCountries.map((code) => (
              <span key={code} className="text-3xl">
                {COUNTRIES[code].flag}
              </span>
            ))}
          </div>

          {/* Score */}
          <div className="mb-8">
            <h2 className="text-2xl mb-4">Take your shots!</h2>
            <div className="flex items-center justify-center space-x-3">
              <Beer className="w-8 h-8" />
              <span className="text-4xl font-bold text-red-500">
                {sips}
              </span>
              <span className="text-2xl">sips</span>
            </div>
          </div>

          {/* Message d'encouragement */}
          <p className="text-slate-400 mb-8">
            {sips > 10 
              ? "Amazing score! 🎉" 
              : sips > 5 
                ? "Well played! 👏" 
                : "Keep practicing! 💪"}
          </p>

          {/* Boutons d'action */}
          <div className="space-y-4">
            <button
              onClick={() => resetGame()}
              className="w-full bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Play Again
            </button>
            
            {/* Partager le score - à implémenter si besoin */}
            <button
              onClick={() => {
                // Logique de partage à implémenter
                navigator.clipboard.writeText(`I just took ${sips} sips playing CultureSips! Can you beat my score?`);
                alert('Score copied to clipboard!');
              }}
              className="w-full bg-slate-700 hover:bg-slate-600 text-white p-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Share Score
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}