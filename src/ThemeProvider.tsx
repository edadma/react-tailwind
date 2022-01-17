import React, { useContext, useState } from 'react'
import { Align, Color, Size, Weight } from './types'

export class ButtonColor {
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

export class ProgressColor {
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

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const colorClass = (theme: any, component: string, color: Color | undefined, elem: string) =>
  theme.component[component].color[color || theme.component[component].default.color][elem]

export const sizeClass = (theme: any, component: string, size: Size | undefined, elem: string) =>
  theme.size[size || theme.component[component].default.size][elem]

export const alignClass = (theme: any, component: string, align: Align | undefined) =>
  theme.align[align || theme.component[component].default.align]

export const weightClass = (theme: any, component: string, weight: Weight | undefined) =>
  theme.weight[weight || theme.component.button.default.weight]
