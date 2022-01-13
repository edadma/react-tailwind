import { Button } from './index'
import React, { useContext } from 'react'
import { ModeContext } from './Mode'
import { ToggleDark, ToggleLight } from './Icons'

export const Switcher: React.FC = () => {
  const { mode, setMode } = useContext(ModeContext)

  return (
    <>
      <Button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        {mode === 'dark' ? <ToggleLight /> : <ToggleDark />}
      </Button>
    </>
  )
}
