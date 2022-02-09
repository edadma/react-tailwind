import React, { useContext, useState } from 'react'
import { useTheme } from './ThemeProvider'
import { Toaster } from 'react-hot-toast'

export type ModeType = 'light' | 'dark'

const DEFAULT_MODE = 'dark'

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

export const ModeProvider: React.FC<{ value?: ModeType }> = ({ children, value }) => {
  const [mode, setMode] = useState(value || DEFAULT_MODE) // dark mode by default
  const { theme } = useTheme()
  const html = document.querySelector('html')

  if (mode === 'dark') html?.classList.add('dark')
  else html?.classList.remove('dark')

  const body = document.querySelector('body')

  body?.classList.add(theme.background.light)
  body?.classList.add(theme.background.dark)

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <>
        <Toaster position="top-right" reverseOrder={true} />
        {children}
      </>
      {/*<div className={`${mode === 'light' ? '' : 'dark'}`}>{children}</div>*/}
    </ModeContext.Provider>
  )
}
