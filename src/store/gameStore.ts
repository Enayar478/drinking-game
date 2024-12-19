import { create } from 'zustand'
import { CountryCode } from '@/utils/countries'

interface GameStore {
  selectedCountries: CountryCode[]
  sips: number
  gameState: 'selection' | 'playing' | 'gameOver'
  currentImageIndex: number
  setSelectedCountries: (countries: CountryCode[]) => void
  incrementSips: () => void
  setGameState: (state: 'selection' | 'playing' | 'gameOver') => void
  resetGame: () => void
}

export const useGameStore = create<GameStore>((set) => ({
  selectedCountries: [],
  sips: 1,
  gameState: 'selection',
  currentImageIndex: 0,
  
  setSelectedCountries: (countries) => set({ selectedCountries: countries }),
  incrementSips: () => set((state) => ({ sips: state.sips + 1 })),
  setGameState: (gameState) => set({ gameState }),
  resetGame: () => set({ 
    selectedCountries: [], 
    sips: 1, 
    gameState: 'selection',
    currentImageIndex: 0
  })
}))