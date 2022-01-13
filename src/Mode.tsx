import React, { useContext } from 'react'

export const LIGHT_MODE = { mode: '', setMode: (newMode: string) => {} }

export const ModeContext = React.createContext(LIGHT_MODE)

export const Mode: React.FC = ({ children }) => {
  const { mode } = useContext(ModeContext)

  return <div className={`${mode}`}>{children}</div>
}
