import React from 'react';
import { useGameStore } from '@/store/gameStore';
import { CountryCode, getCountryEntries, getCountryFlag } from '@/utils/countries';

export function CountrySelection() {
  const { selectedCountries, setSelectedCountries, setGameState } = useGameStore();

  const handleCountrySelect = (countryCode: CountryCode) => {
    if (selectedCountries.includes(countryCode)) {
      setSelectedCountries(
        selectedCountries.filter(c => c !== countryCode)
      );
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
    <div className="min-h-screen bg-slate-900 text-white p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">CULTURESIPS</h1>
        
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl mb-4 text-center">
            Select 2 countries to play
          </h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {getCountryEntries().map(([code, country]) => (
              <button
                key={code}
                onClick={() => handleCountrySelect(code)}
                className={`
                  flex items-center justify-center space-x-2 p-4 rounded-lg
                  transition-colors duration-200
                  ${selectedCountries.includes(code)
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-slate-700 hover:bg-slate-600'}
                `}
              >
                <span className="text-2xl">{country.flag}</span>
                <span>{country.name}</span>
              </button>
            ))}
          </div>

          <button
            onClick={handleStartGame}
            disabled={selectedCountries.length !== 2}
            className={`
              w-full p-4 rounded-lg font-semibold
              transition-colors duration-200
              ${selectedCountries.length === 2
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-slate-600 cursor-not-allowed'}
            `}
          >
            {selectedCountries.length === 2 ? 'Start Game!' : 'Select 2 countries'}
          </button>
        </div>

        <div className="text-center text-slate-400">
          <p>Selected: {selectedCountries.map(getCountryFlag).join(' vs ')}</p>
        </div>
      </div>
    </div>
  );
}