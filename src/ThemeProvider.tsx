import React, { useContext, useState } from 'react'
import { Align, Color, Size, Weight } from './types'
import { DefaultTheme } from './themes/DefaultTheme'

export const optionProps = (theme: any, props: any, component: string, ...options: string[]) => {
  const extensibleProps: any = {}

  options.forEach((option) => (extensibleProps[option] = props[option]))

  if (theme.component[component].exclusions)
    options.forEach((option) => {
      if (theme.component[component].exclusions[option])
        extensibleProps[theme.component[component].exclusions[option]] = false
    })

  return options
    .map((option) => {
      const style = theme.component[component].options[option]
      const selected =
        extensibleProps[option] !== undefined
          ? extensibleProps[option]
          : theme.component[component].default[option]

      return Array.isArray(style) ? style[selected ? 0 : 1] : selected ? style : ''
    })
    .join(' ')
}

export const SET_THEME: SetTheme = {
  theme: DefaultTheme,
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

export const ThemeProvider: React.FC<{ value?: any }> = ({ children, value }) => {
  const [theme, setTheme] = useState(value || DefaultTheme)

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const colorClass = (theme: any, component: string, color: Color | undefined, elem: string) =>
  theme.component[component].color[color || theme.component[component].default.color][elem]

export const sizeClass = (theme: any, component: string, size: Size | undefined, elem: string) =>
  theme.size[size || theme.component[component].default.size][elem]

const alignClasses: any = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
}

export const alignClass = (theme: any, component: string, align: Align | undefined) =>
  alignClasses[align || theme.component[component].default.align]

export const weightClass = (theme: any, component: string, weight: Weight | undefined) =>
  theme.weight[weight || theme.component[component].default.weight]

const padClasses: any = {
  0: 'p-0',
  1: 'p-1',
  2: 'p-2',
  3: 'p-3',
  4: 'p-4',
  5: 'p-5',
  6: 'p-6',
  7: 'p-7',
  8: 'p-8',
  9: 'p-9',
  10: 'p-10',
  11: 'p-11',
  12: 'p-12',
  13: 'p-13',
  14: 'p-14',
  15: 'p-15',
}

export const padClass = (theme: any, component: string, pad: number | undefined) =>
  padClasses[pad || theme.component[component].default.pad] // todo: it should be possible for 'pad' to be null as well as undefined, where null means no padding class; and it should be possible for default.pad to be null as well with the same meaning
