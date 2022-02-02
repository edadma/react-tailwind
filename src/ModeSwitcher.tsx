import React from 'react'
import { Button } from './Button'
import { useMode } from './ModeProvider'
import { ToggleDark, ToggleLight } from './Icons'

export const ModeSwitcher: React.FC = () => {
  const { mode, setMode } = useMode()

  return (
    <Button
      icon
      pill
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'dark' ? <ToggleLight /> : <ToggleDark />}
    </Button>
  )
}
