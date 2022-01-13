import React, { useContext, useState } from 'react'
import { ThemeContext } from './ThemeContext'

export type ModeType = 'light' | 'dark'

export const SET_MODE: SetMode = {
  mode: 'light',
  setMode: () => {
    alert('no mode state: use the <Mode> component')
  },
}

export interface SetMode {
  mode: ModeType
  setMode: React.Dispatch<React.SetStateAction<ModeType>>
}

export const ModeContext = React.createContext(SET_MODE)

export const useMode = () => useContext(ModeContext)

export const Mode: React.FC = ({ children }) => {
  const t = useContext(ThemeContext)
  const [mode, setMode] = useState(t.mode)

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <div className={`${mode === 'light' ? '' : 'dark'}`}>{children}</div>
    </ModeContext.Provider>
  )
}
