import React, { useContext, useState } from 'react'
import { Role, Size, Weight } from './types'

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

export const optionProps = (context: any, props: any, component: string, ...options: string[]) =>
  options
    .map((option) => {
      const style = context.component[component].options[option]
      const selected =
        props[option] !== undefined ? props[option] : context.component[component].default[option]

      return Array.isArray(style) ? style[selected ? 0 : 1] : selected ? style : ''
    })
    .join(' ')

export const SET_THEME: SetTheme = {
  theme: 'DefaultTheme',
  setTheme: () => {
    alert('no theme state: use the <ThemeProvider> component')
  },
}

export interface SetTheme {
  theme: any
  setTheme: React.Dispatch<React.SetStateAction<any>>
}

export const ThemeContext = React.createContext(SET_THEME)

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: React.FC<{ value: any }> = ({ children, value }) => {
  const [theme, setTheme] = useState(value)

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
