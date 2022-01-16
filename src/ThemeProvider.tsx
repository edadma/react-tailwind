import React, { useContext, useState } from 'react'
import { Role, Size, Weight } from './types'
import { ModeType } from './ModeProvider'

export class ButtonRole {
  constructor(
    public outlinedText: string,
    public filledText: string,
    public filledBg: string,
    public outlinedHoverBg: string,
    public filledHoverBg: string,
    public focusRing: string,
    public outlinedBorder: string,
    public outlinedHoverText: string
  ) {}
}

export class ProgressRole {
  constructor(public text: string, public bg: string) {}
}

export class AlertStyle {
  constructor(public text: string, public bg: string, public border: string) {}
}

export const optionProps = (context: any, props: any, component: string, ...options: string[]) =>
  options
    .map((option) => {
      const style = context.component[component].options[option]
      const selected =
        props[option] !== undefined ? props[option] : context.component[component].default[option]

      return Array.isArray(style) ? style[selected ? 0 : 1] : selected ? style : ''
    })
    .join(' ')

export const SET_THEME: SetMode = {
  theme: 'DefaultTheme',
  setTheme: () => {
    alert('no theme state: use the <ThemeProvider> component')
  },
}

export interface SetMode {
  theme: any
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = React.createContext(SET_THEME)

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: React.FC<{ init: any }> = ({ children, init }) => {
  const [theme, setTheme] = useState(init)

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const colorClass = (theme: any, component: string, role: Role | undefined, elem: string) =>
  theme.component[component].role[role || theme.component[component].default.role][elem]

export const sizeClass = (
  theme: any,
  component: string,
  size: Size | undefined,
  elem: 'text' | 'height'
) => theme.size[size || theme.component[component].default.size][elem]

export const weightClass = (theme: any, component: string, weight: Weight | undefined) =>
  theme.weight[weight || theme.component.button.default.weight]
