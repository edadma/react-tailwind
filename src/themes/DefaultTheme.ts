import { ButtonColor, ProgressColor } from '../ThemeProvider'

export const DefaultTheme = {
  name: 'Default Theme',
  description: 'Basic theme with support for both light and dark modes',
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
  align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  },
  component: {
    button: {
      style: 'focus:ring-2 text-center mr-2 mb-2',
      color: {
        primary: new ButtonColor(
          'text-green-600',
          'text-green-50',
          'bg-green-600 dark:bg-green-500',
          'hover:bg-green-600',
          'hover:bg-green-800 dark:hover:bg-green-700',
          'focus:ring-green-300 dark:focus:ring-green-800',
          'border border-green-500',
          'hover:text-green-50'
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
          'text-green-600',
          'text-green-50',
          'bg-green-600 dark:bg-green-500',
          'hover:bg-green-600',
          'hover:bg-green-800 dark:hover:bg-green-700',
          'focus:ring-green-300 dark:focus:ring-green-800',
          'border border-green-500',
          'hover:text-green-50'
        ),
        warning: new ButtonColor(
          'text-yellow-600',
          'text-yellow-50',
          'bg-yellow-600 dark:bg-yellow-500',
          'hover:bg-yellow-600',
          'hover:bg-yellow-800 dark:hover:bg-yellow-700',
          'focus:ring-yellow-300 dark:focus:ring-yellow-800',
          'border border-yellow-500',
          'hover:text-yellow-50'
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
        color: 'regular',
      },
    },
    progress: {
      style: {
        bar: 'w-full bg-gray-400 dark:bg-gray-700',
        progressLabel: 'text-center p-0.5 leading-none',
      },
      color: {
        primary: new ProgressColor('text-green-50', 'bg-green-600 dark:bg-green-500'),
        secondary: new ProgressColor('text-blue-50', 'bg-blue-600 dark:bg-blue-500'),
        regular: new ProgressColor('text-gray-50', 'bg-gray-600 dark:bg-gray-500'),
        info: new ProgressColor('text-blue-50', 'bg-blue-600 dark:bg-blue-500'),
        success: new ProgressColor('text-green-50', 'bg-green-600 dark:bg-green-500'),
        warning: new ProgressColor('text-yellow-50', 'bg-yellow-600 dark:bg-yellow-500'),
        error: new ProgressColor('text-red-50', 'bg-red-600 dark:bg-red-500'),
      },
      options: { rounded: 'rounded-full' },
      default: { rounded: true, weight: 'bold', size: 'sm', color: 'regular' },
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
      color: {
        primary: {
          div: 'bg-green-100 border-green-500 text-green-700 dark:text-green-800 dark:bg-green-200',
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
          div: 'bg-green-100 border-green-500 text-green-700 dark:text-green-800 dark:bg-green-200',
        },
        warning: {
          div: 'bg-yellow-100 border-yellow-500 text-yellow-700 dark:text-yellow-800 dark:bg-yellow-200',
        },
        error: {
          div: 'bg-red-100 border-red-500 text-red-700 dark:text-red-800 dark:bg-red-200',
        },
      },
      options: {
        rounded: 'rounded-lg',
        border: 'border-t-4',
      },
      default: { rounded: true, border: true, size: 'sm', color: 'regular' },
    },
    text: {
      color: {
        primary: {
          text: 'text-green-700 dark:text-green-800',
        },
        secondary: {
          text: 'text-blue-700 dark:text-blue-800',
        },
        regular: {
          text: 'text-gray-700 dark:text-gray-800',
        },
        info: {
          text: 'text-blue-700 dark:text-blue-800',
        },
        success: {
          text: 'text-green-700 dark:text-green-800',
        },
        warning: {
          text: 'text-yellow-700 dark:text-yellow-800',
        },
        error: {
          text: 'text-red-700 dark:text-red-800',
        },
      },
      options: {
        underline: 'underline',
        overline: 'overline',
        strikethrough: 'line-through',
      },
      default: {
        underline: false,
        overline: false,
        strikethrough: false,
        size: 'sm',
        color: 'regular',
        align: 'left',
      },
    },
    row: {
      style: 'grid',
      default: {
        cols: 12,
        gap: 4,
      },
    },
  },
}
