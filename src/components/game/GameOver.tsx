// src/components/game/GameOver.tsx
'use client';

import React, { useEffect } from 'react';
import { useGameStore } from '@/store/gameStore';
import { Beer, RotateCcw, Shuffle, Skull } from 'lucide-react';
import { COUNTRIES } from '@/utils/countries';

export function GameOver() {
  const { sips, selectedCountries, resetGame, continueWithSameCountries } = useGameStore();

  useEffect(() => {
    // Vibration forte pour game over
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 100, 200, 100, 200]);
    }
  }, []);

  const getMessage = () => {
    if (sips <= 3) return "Facile ! 😏";
    if (sips <= 7) return "Pas mal ! 🍺";
    if (sips <= 15) return "Impressionnant ! 🔥";
    return "LÉGENDE ! 🏆";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-purple-900 text-white p-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        {/* Animation de skull */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Skull className="w-32 h-32 text-red-500 animate-pulse" />
            <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full"></div>
          </div>
        </div>

        {/* Titre dramatique */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-black text-red-500 mb-4 animate-bounce">
            PERDU !
          </h1>
          <p className="text-2xl text-slate-300">{getMessage()}</p>
        </div>

        {/* Carte de pénalité */}
        <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-8 mb-8 border-2 border-red-500/50 shadow-2xl">
          {/* Message principal */}
          <div className="text-center mb-6">
            <p className="text-xl text-slate-200 mb-6">
              🍻 Il est temps de boire ! 🍻
            </p>

            {/* Compteur de gorgées */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <Beer className="w-12 h-12 text-orange-400 animate-bounce" />
              <div className="bg-black/40 rounded-2xl px-8 py-4 border-2 border-orange-500">
                <span className="text-7xl font-black text-orange-400 drop-shadow-lg">
                  {sips}
                </span>
              </div>
              <Beer className="w-12 h-12 text-orange-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>

            <p className="text-3xl font-bold text-orange-400">
              {sips === 1 ? 'gorgée' : 'gorgées'}
            </p>
          </div>

          {/* Pays en jeu */}
          <div className="flex items-center justify-center gap-8 py-4 mb-4">
            {selectedCountries.map((code) => (
              <div key={code} className="flex flex-col items-center gap-2">
                <span className="text-6xl drop-shadow-lg">
                  {COUNTRIES[code].flag}
                </span>
                <span className="text-sm font-bold text-slate-300">
                  {COUNTRIES[code].name}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="text-center pt-4 border-t border-white/10">
            <p className="text-sm text-slate-400">
              Tu as eu {sips - 1} {sips === 2 ? 'bonne réponse' : 'bonnes réponses'} !
            </p>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="space-y-4">
          <button
            onClick={continueWithSameCountries}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white p-5 rounded-2xl font-bold text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/50 border-2 border-orange-300 flex items-center justify-center gap-3"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Revanche ! (mêmes pays)</span>
          </button>

          <button
            onClick={resetGame}
            className="w-full bg-slate-700/50 hover:bg-slate-600/50 text-white p-5 rounded-2xl font-bold text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 border-2 border-white/10 flex items-center justify-center gap-3"
          >
            <Shuffle className="w-5 h-5" />
            <span>Changer de pays</span>
          </button>
        </div>

        {/* Message d'encouragement */}
        <div className="mt-6 text-center">
          <p className="text-slate-500 text-sm">
            {sips >= 10 ? "🎉 Incroyable performance !" : "💪 Tu peux faire mieux !"}
          </p>
        </div>
      </div>
    </div>
  );
}