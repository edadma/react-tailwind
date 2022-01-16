import React, { useContext, useState } from 'react'

export type ModeType = 'light' | 'dark'

export const SET_MODE: SetMode = {
  mode: 'light',
  setMode: () => {
    alert('no mode state: use the <ModeProvider> component')
  },
}

export interface SetMode {
  mode: ModeType
  setMode: React.Dispatch<React.SetStateAction<ModeType>>
}

export const ModeContext = React.createContext(SET_MODE)

export const useMode = () => useContext(ModeContext)

export const ModeProvider: React.FC<{ value: ModeType }> = ({ children, value }) => {
  const [mode, setMode] = useState(value)

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <div className={`${mode === 'light' ? '' : 'dark'}`}>{children}</div>
    </ModeContext.Provider>
  )
}
