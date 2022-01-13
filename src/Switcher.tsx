import { Button } from './index'
import React, { useContext } from 'react'
import { ModeContext } from './Mode'

export const Switcher: React.FC = () => {
  const { setMode } = useContext(ModeContext)

  return (
    <>
      <Button outlined role="info">
        light
      </Button>
      <Button role="info" onClick={() => setMode('dark')}>
        dark
      </Button>
    </>
  )
}
