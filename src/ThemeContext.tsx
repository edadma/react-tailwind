import React from 'react'
import { Role, Size } from './types'
import { ModeType } from './Mode'

export class RoleStyle {
  constructor(
    public textOutlined: string,
    public textLightShade: string,
    public bg: string,
    public hoverBgOutlined: string,
    public hoverBg: string,
    public focusRing: string,
    public border: string,
    public hoverTextLightShade: string
  ) {}
}

export const DEFAULT_THEME = {
  mode: 'light' as ModeType,
  role: {
    primary: new RoleStyle(
      'text-green-600',
      'text-green-50',
      'bg-green-600',
      'hover:bg-green-600',
      'hover:bg-green-800',
      'focus:ring-green-300',
      'border border-green-500',
      'hover:text-green-50'
    ),
    secondary: new RoleStyle(
      'text-blue-600',
      'text-blue-50',
      'bg-blue-600',
      'hover:bg-blue-600',
      'hover:bg-blue-800',
      'focus:ring-blue-300',
      'border border-blue-500',
      'hover:text-blue-50'
    ),
    regular: new RoleStyle(
      'text-gray-600',
      'text-gray-50',
      'bg-gray-600',
      'hover:bg-gray-600',
      'hover:bg-gray-800',
      'focus:ring-gray-300',
      'border border-gray-500',
      'hover:text-gray-50'
    ),
    accent: new RoleStyle(
      'text-indigo-600',
      'text-indigo-50',
      'bg-indigo-600',
      'hover:bg-indigo-600',
      'hover:bg-indigo-800',
      'focus:ring-indigo-300',
      'border border-indigo-500',
      'hover:text-indigo-50'
    ),
    info: new RoleStyle(
      'text-blue-600',
      'text-blue-50',
      'bg-blue-600',
      'hover:bg-blue-600',
      'hover:bg-blue-800',
      'focus:ring-blue-300',
      'border border-blue-500',
      'hover:text-blue-50'
    ),
    success: new RoleStyle(
      'text-green-600',
      'text-green-50',
      'bg-green-600',
      'hover:bg-green-600',
      'hover:bg-green-800',
      'focus:ring-green-300',
      'border border-green-500',
      'hover:text-green-50'
    ),
    warning: new RoleStyle(
      'text-yellow-600',
      'text-yellow-50',
      'bg-yellow-600',
      'hover:bg-yellow-600',
      'hover:bg-yellow-800',
      'focus:ring-yellow-300',
      'border border-yellow-500',
      'hover:text-yellow-50'
    ),
    error: new RoleStyle(
      'text-red-600',
      'text-red-50',
      'bg-red-600',
      'hover:bg-red-600',
      'hover:bg-red-800',
      'focus:ring-red-300',
      'border border-red-500',
      'hover:text-red-50'
    ),
  },
  size: {
    xs: ['text-xs', 'h-1'],
    sm: ['text-sm', 'h-1.5'],
    base: ['text-base', 'h-2.5'],
    lg: ['text-lg', 'h-4'],
    xl: ['text-xl', 'h-5'],
    '2xl': ['text-2xl', 'h-6'],
    '3xl': ['text-3xl', 'h-7'],
    '4xl': ['text-4xl', 'h-8'],
    '5xl': ['text-5xl', 'h-9'],
    '6xl': ['text-6xl', 'h-10'],
    '7xl': ['text-7xl', 'h-11'],
    '8xl': ['text-8xl', 'h-12'],
    '9xl': ['text-9xl', 'h-14'],
  },
  weight: {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
  },
  component: {
    button: {
      style: 'focus:ring-2 text-center mr-2 mb-2',
      options: { rounded: 'rounded-lg', pill: 'rounded-full', icon: ['p-2.5', 'px-5 py-2.5'] },
      defaults: { rounded: true, pill: false, icon: false, weight: 'bold' },
    },
    card: {
      style: 'p-6 bg-white dark:bg-gray-800',
      options: {
        rounded: 'rounded-lg',
        border: 'border border-gray-200 dark:border-gray-700',
        shadow: 'shadow-md',
      },
      defaults: { rounded: false, border: true, shadow: false },
    },
  },
}

export const optionProps = (context: any, props: any, component: string, ...options: string[]) =>
  options
    .map((option) => {
      const style = context.component[component].options[option]
      const selected =
        props[option] !== undefined ? props[option] : context.component[component].defaults[option]

      return Array.isArray(style) ? style[selected ? 0 : 1] : selected ? style : ''
    })
    .join(' ')

export const TEXTS = 0
export const HEIGHT = 1

export const ThemeContext = React.createContext<any>(DEFAULT_THEME)

export const colorClass = (context: any, role: Role | undefined, elem: string) =>
  context.role[role || 'regular'][elem]

export const sizeClass = (context: any, size: Size | undefined, elem: number) =>
  context.size[size || 'base'][elem]
