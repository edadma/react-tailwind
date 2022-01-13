import React, { useContext } from 'react'
import { Button } from './index'
import { ModeContext } from './Mode'
import { ToggleDark, ToggleLight } from './Icons'

export const Switcher: React.FC = () => {
  const { mode, setMode } = useContext(ModeContext)

  return (
    <Button pill onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
      {mode === 'dark' ? <ToggleLight /> : <ToggleDark />}
    </Button>
  )
}
