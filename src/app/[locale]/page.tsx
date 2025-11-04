// src/app/page.tsx
'use client'

import { CountrySelection } from '@/components/game/CountrySelection'
import { GameBoard } from '@/components/game/GameBoard'
import { GameOver } from '@/components/game/GameOver'
import { useGameStore } from '@/store/gameStore'

export default function Home() {
  const gameState = useGameStore(state => state.gameState)

  return (
    <main>
      {gameState === 'selection' && <CountrySelection />}
      {gameState === 'playing' && <GameBoard />}
      {gameState === 'gameOver' && <GameOver />}
    </main>
  )
}