import React from 'react'
import { Role, Size } from './types'

export const DEFAULT_THEME = {
  role: {
    primary: [
      'text-green-600', // text outline
      'text-green-100', // text light shade
      'bg-green-600', // bg
      'hover:bg-green-600', // hover bg outline
      'hover:bg-green-800', // hover
      'focus:ring-green-300', // ring
      'border border-green-500', // border
      'hover:text-green-100', // text light shade hover
    ],
    secondary: [
      'text-blue-600',
      'text-blue-100',
      'bg-blue-600',
      'hover:bg-blue-600',
      'hover:bg-blue-800',
      'focus:ring-blue-300',
      'border border-blue-500',
      'hover:text-blue-100',
    ],
    regular: [
      'text-gray-600',
      'text-gray-100',
      'bg-gray-600',
      'hover:bg-gray-600',
      'hover:bg-gray-800',
      'focus:ring-gray-300',
      'border border-gray-500',
      'hover:text-gray-100',
    ],
    accent: [
      'text-indigo-600',
      'text-indigo-100',
      'bg-indigo-600',
      'hover:bg-indigo-600',
      'hover:bg-indigo-800',
      'focus:ring-indigo-300',
      'border border-indigo-500',
      'hover:text-indigo-100',
    ],
    info: [
      'text-blue-600',
      'text-blue-100',
      'bg-blue-600',
      'hover:bg-blue-600',
      'hover:bg-blue-800',
      'focus:ring-blue-300',
      'border border-blue-500',
      'hover:text-blue-100',
    ],
    success: [
      'text-green-600',
      'text-green-100',
      'bg-green-600',
      'hover:bg-green-600',
      'hover:bg-green-800',
      'focus:ring-green-300',
      'border border-green-500',
      'hover:text-green-100',
    ],
    warning: [
      'text-yellow-600',
      'text-yellow-100',
      'bg-yellow-600',
      'hover:bg-yellow-600',
      'hover:bg-yellow-800',
      'focus:ring-yellow-300',
      'border border-yellow-500',
      'hover:text-yellow-100',
    ],
    error: [
      'text-red-600',
      'text-red-100',
      'bg-red-600',
      'hover:bg-red-600',
      'hover:bg-red-800',
      'focus:ring-red-300',
      'border border-red-500',
      'hover:text-red-100',
    ],
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
  defaults: {
    rounded: 'rounded',
  },
  component: {
    button: {
      style: 'font-medium focus:ring-2 px-5 py-2.5 text-center mr-2 mb-2',
      defaults: { rounded: 'rounded-lg' },
    },
  },
}

export const TEXTDS = 0
export const TEXTLS = 1
export const BG = 2
export const HOVERLS = 3
export const HOVERDS = 4
export const RING = 5
export const BORDER = 6
export const TEXTLSH = 7

export const TEXTS = 0
export const HEIGHT = 1

export const ThemeContext = React.createContext<any>(DEFAULT_THEME)

export const colorClass = (context: any, role: Role | undefined, elem: number) =>
  context.role[role || 'regular'][elem]

export const sizeClass = (context: any, size: Size | undefined, elem: number) =>
  context.size[size || 'base'][elem]
