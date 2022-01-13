import { Button } from './index'
import React, { useContext } from 'react'
import { ModeContext } from './Mode'

export const Switcher: React.FC = () => {
  const { mode, setMode } = useContext(ModeContext)

  return (
    <>
      <Button weight="thin" outlined role="info" onClick={() => setMode('light')}>
        light
      </Button>
      <Button role="info" onClick={() => setMode('dark')}>
        dark
      </Button>
      {mode}
    </>
  )
}
