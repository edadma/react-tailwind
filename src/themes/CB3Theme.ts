import { ButtonColor, ProgressColor } from '../ThemeProvider'

export const CB3Theme = {
  name: 'Inclusive 3 Theme',
  description:
    'Theme catering to the 6% who see things differently with support for both light and dark modes',
  size: {
    xs: { text: 'text-xs', height: 'h-4' },
    sm: { text: 'text-sm', height: 'h-4' },
    md: { text: 'text-base', height: 'h-5' },
    lg: { text: 'text-lg', height: 'h-5' },
    xl: { text: 'text-xl', height: 'h-6' },
    '2xl': { text: 'text-2xl', height: 'h-7' },
    '3xl': { text: 'text-3xl', height: 'h-8' },
    '4xl': { text: 'text-4xl', height: 'h-10' },
    '5xl': { text: 'text-5xl', height: 'h-14' },
    '6xl': { text: 'text-6xl', height: 'h-16' },
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
      role: {
        primary: new ButtonColor(
          'text-cb3success-600',
          'text-cb3success-50',
          'bg-cb3success-600 dark:bg-cb3success-500',
          'hover:bg-cb3success-600',
          'hover:bg-cb3success-800 dark:hover:bg-cb3success-700',
          'focus:ring-cb3success-300 dark:focus:ring-cb3success-800',
          'border border-cb3success-500',
          'hover:text-cb3success-50'
        ),
        secondary: new ButtonColor(
          'text-blue-600',
          'text-blue-50',
          'bg-blue-600 dark:bg-blue-500',
          'hover:bg-blue-600',
          'hover:bg-blue-800 dark:hover:bg-blue-700',
          'focus:ring-blue-300 dark:focus:ring-blue-800',
          'border border-blue-500',
          'hover:text-blue-50'
        ),
        regular: new ButtonColor(
          'text-gray-600',
          'text-gray-50',
          'bg-gray-600 dark:bg-gray-500',
          'hover:bg-gray-600',
          'hover:bg-gray-800 dark:hover:bg-gray-700',
          'focus:ring-gray-300 dark:focus:ring-gray-800',
          'border border-gray-500',
          'hover:text-gray-50'
        ),
        info: new ButtonColor(
          'text-blue-600',
          'text-blue-50',
          'bg-blue-600 dark:bg-blue-500',
          'hover:bg-blue-600',
          'hover:bg-blue-800 dark:hover:bg-blue-700',
          'focus:ring-blue-300 dark:focus:ring-blue-800',
          'border border-blue-500',
          'hover:text-blue-50'
        ),
        success: new ButtonColor(
          'text-cb3success-600',
          'text-cb3success-50',
          'bg-cb3success-600 dark:bg-cb3success-500',
          'hover:bg-cb3success-600',
          'hover:bg-cb3success-800 dark:hover:bg-cb3success-700',
          'focus:ring-cb3success-300 dark:focus:ring-cb3success-800',
          'border border-cb3success-500',
          'hover:text-cb3success-50'
        ),
        warning: new ButtonColor(
          'text-cb3warning-600',
          'text-cb3warning-50',
          'bg-cb3warning-600 dark:bg-cb3warning-500',
          'hover:bg-cb3warning-600',
          'hover:bg-cb3warning-800 dark:hover:bg-cb3warning-700',
          'focus:ring-cb3warning-300 dark:focus:ring-cb3warning-800',
          'border border-cb3warning-500',
          'hover:text-cb3warning-50'
        ),
        error: new ButtonColor(
          'text-red-600',
          'text-red-50',
          'bg-red-600 dark:bg-red-500',
          'hover:bg-red-600',
          'hover:bg-red-800 dark:hover:bg-red-700',
          'focus:ring-red-300 dark:focus:ring-red-800',
          'border border-red-500',
          'hover:text-red-50'
        ),
      },
      options: {
        rounded: 'rounded-lg',
        pill: 'rounded-full',
        icon: ['p-2.5', 'px-5 py-2.5'],
        transition: 'transition ease-in-out duration-300',
      },
      default: {
        rounded: true,
        pill: false,
        icon: false,
        transition: true,
        weight: 'bold',
        size: 'md',
        role: 'regular',
      },
    },
    progress: {
      style: {
        bar: 'w-full bg-gray-400 dark:bg-gray-700',
        progressLabel: 'text-center p-0.5 leading-none',
      },
      role: {
        primary: new ProgressColor(
          'text-cb3success-50',
          'bg-cb3success-600 dark:bg-cb3success-500'
        ),
        secondary: new ProgressColor('text-blue-50', 'bg-blue-600 dark:bg-blue-500'),
        regular: new ProgressColor('text-gray-50', 'bg-gray-600 dark:bg-gray-500'),
        info: new ProgressColor('text-blue-50', 'bg-blue-600 dark:bg-blue-500'),
        success: new ProgressColor(
          'text-cb3success-50',
          'bg-cb3success-600 dark:bg-cb3success-500'
        ),
        warning: new ProgressColor(
          'text-cb3warning-50',
          'bg-cb3warning-600 dark:bg-cb3warning-500'
        ),
        error: new ProgressColor('text-red-50', 'bg-red-600 dark:bg-red-500'),
      },
      options: { rounded: 'rounded-full' },
      default: { rounded: true, weight: 'bold', size: 'sm', role: 'regular' },
    },
    card: {
      style: 'p-6 bg-white dark:bg-gray-800',
      options: {
        rounded: 'rounded-lg',
        border: 'border border-gray-200 dark:border-gray-700',
        shadow: 'shadow-md',
      },
      default: { rounded: false, border: true, shadow: false },
    },
    alert: {
      style: 'p-4 mb-4',
      role: {
        primary: {
          div: 'bg-cb3success-100 border-cb3success-500 text-cb3success-700 dark:text-cb3success-800 dark:bg-cb3success-200',
        },
        secondary: {
          div: 'bg-blue-100 border-blue-500 text-blue-700 dark:text-blue-800 dark:bg-blue-200',
        },
        regular: {
          div: 'bg-gray-100 border-gray-500 text-gray-700 dark:text-gray-800 dark:bg-gray-200',
        },
        info: {
          div: 'bg-blue-100 border-blue-500 text-blue-700 dark:text-blue-800 dark:bg-blue-200',
        },
        success: {
          div: 'bg-cb3success-100 border-cb3success-500 text-cb3success-700 dark:text-cb3success-800 dark:bg-cb3success-200',
        },
        warning: {
          div: 'bg-cb3warning-100 border-cb3warning-500 text-cb3warning-700 dark:text-cb3warning-800 dark:bg-cb3warning-200',
        },
        error: {
          div: 'bg-red-100 border-red-500 text-red-700 dark:text-red-800 dark:bg-red-200',
        },
      },
      options: {
        rounded: 'rounded-lg',
        border: 'border-t-4',
      },
      default: { rounded: true, border: true, size: 'sm', role: 'regular' },
    },
  },
}
