export const DefaultTheme = {
  name: 'Default Theme',
  description: 'Basic theme with support for both light and dark modes',
  dark: 'dark:bg-neutral-800',
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
  width: {
    40: 'w-40',
    44: 'w-44',
    48: 'w-48',
    52: 'w-52',
    56: 'w-56',
    60: 'w-60',
    64: 'w-64',
    72: 'w-72',
    80: 'w-80',
    96: 'w-96',
  },
  component: {
    button: {
      style: 'inline-block focus:ring-2 text-center shadow-md hover:shadow-lg',
      color: {
        primary: {
          outlined: 'text-green-600 hover:bg-green-600 border border-green-500 hover:text-green-50',
          filled:
            'text-green-50 bg-green-600 dark:bg-green-500 hover:bg-green-800 dark:hover:bg-green-700',
          focus: 'focus:ring-green-300 dark:focus:ring-green-800',
        },
        secondary: {
          outlined: 'text-blue-600 hover:bg-blue-600 border border-blue-500 hover:text-blue-50',
          filled:
            'text-blue-50 bg-blue-600 dark:bg-blue-500 hover:bg-blue-800 dark:hover:bg-blue-700',
          focus: 'focus:ring-blue-300 dark:focus:ring-blue-800',
        },
        regular: {
          outlined: 'text-gray-600 hover:bg-gray-600 border border-gray-500 hover:text-gray-50',
          filled:
            'text-gray-50 bg-gray-600 dark:bg-gray-500 hover:bg-gray-800 dark:hover:bg-gray-700',
          focus: 'focus:ring-gray-300 dark:focus:ring-gray-800',
        },
        info: {
          outlined: 'text-blue-600 hover:bg-blue-600 border border-blue-500 ',
          filled:
            'text-blue-50 bg-blue-600 dark:bg-blue-500 hover:bg-blue-800 dark:hover:bg-blue-700',
          focus: 'focus:ring-blue-300 dark:focus:ring-blue-800',
        },
        success: {
          outlined: 'text-green-600 hover:bg-green-600 border border-green-500 hover:text-green-50',
          filled:
            'text-green-50 bg-green-600 dark:bg-green-500 hover:bg-green-800 dark:hover:bg-green-700',
          focus: 'focus:ring-green-300 dark:focus:ring-green-800',
        },
        warning: {
          outlined:
            'text-yellow-600 hover:bg-yellow-600 border border-yellow-500 hover:text-yellow-50',
          filled:
            'text-yellow-50 bg-yellow-600 dark:bg-yellow-500 hover:bg-yellow-800 dark:hover:bg-yellow-700',
          focus: 'focus:ring-yellow-300 dark:focus:ring-yellow-800',
        },
        error: {
          outlined: 'text-red-600 hover:bg-red-600 border border-red-500 hover:text-red-50',
          filled: 'text-red-50 bg-red-600 dark:bg-red-500 hover:bg-red-800 dark:hover:bg-red-700',
          focus: 'focus:ring-red-300 dark:focus:ring-red-800',
        },
      },
      options: {
        rounded: 'rounded-lg',
        pill: 'rounded-full',
        icon: ['p-2.5', 'px-5 py-2.5'],
        transition: 'transition ease-in-out duration-300',
      },
      exclusions: { pill: 'rounded' },
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
    link: {
      style: 'inline-block focus:ring-2 text-center shadow-md hover:shadow-lg',
      color: {
        primary: {
          outlined: 'text-green-600 hover:bg-green-600 border border-green-500 hover:text-green-50',
          filled:
            'text-green-50 bg-green-600 dark:bg-green-500 hover:bg-green-800 dark:hover:bg-green-700',
          focus: 'focus:ring-green-300 dark:focus:ring-green-800',
        },
        secondary: {
          outlined: 'text-blue-600 hover:bg-blue-600 border border-blue-500 hover:text-blue-50',
          filled:
            'text-blue-50 bg-blue-600 dark:bg-blue-500 hover:bg-blue-800 dark:hover:bg-blue-700',
          focus: 'focus:ring-blue-300 dark:focus:ring-blue-800',
        },
        regular: {
          outlined: 'text-gray-600 hover:bg-gray-600 border border-gray-500 hover:text-gray-50',
          filled:
            'text-gray-50 bg-gray-600 dark:bg-gray-500 hover:bg-gray-800 dark:hover:bg-gray-700',
          focus: 'focus:ring-gray-300 dark:focus:ring-gray-800',
        },
        info: {
          outlined: 'text-blue-600 hover:bg-blue-600 border border-blue-500 ',
          filled:
            'text-blue-50 bg-blue-600 dark:bg-blue-500 hover:bg-blue-800 dark:hover:bg-blue-700',
          focus: 'focus:ring-blue-300 dark:focus:ring-blue-800',
        },
        success: {
          outlined: 'text-green-600 hover:bg-green-600 border border-green-500 hover:text-green-50',
          filled:
            'text-green-50 bg-green-600 dark:bg-green-500 hover:bg-green-800 dark:hover:bg-green-700',
          focus: 'focus:ring-green-300 dark:focus:ring-green-800',
        },
        warning: {
          outlined:
            'text-yellow-600 hover:bg-yellow-600 border border-yellow-500 hover:text-yellow-50',
          filled:
            'text-yellow-50 bg-yellow-600 dark:bg-yellow-500 hover:bg-yellow-800 dark:hover:bg-yellow-700',
          focus: 'focus:ring-yellow-300 dark:focus:ring-yellow-800',
        },
        error: {
          outlined: 'text-red-600 hover:bg-red-600 border border-red-500 hover:text-red-50',
          filled: 'text-red-50 bg-red-600 dark:bg-red-500 hover:bg-red-800 dark:hover:bg-red-700',
          focus: 'focus:ring-red-300 dark:focus:ring-red-800',
        },
      },
      options: {
        rounded: 'rounded-lg',
        pill: 'rounded-full',
        icon: ['p-2.5', 'px-5 py-2.5'],
        transition: 'transition ease-in-out duration-300',
      },
      exclusions: { pill: 'rounded' },
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
        primary: { text: 'text-green-50', bg: 'bg-green-600 dark:bg-green-500' },
        secondary: { text: 'text-blue-50', bg: 'bg-blue-600 dark:bg-blue-500' },
        regular: { text: 'text-gray-50', bg: 'bg-gray-600 dark:bg-gray-500' },
        info: { text: 'text-blue-50', bg: 'bg-blue-600 dark:bg-blue-500' },
        success: { text: 'text-green-50', bg: 'bg-green-600 dark:bg-green-500' },
        warning: { text: 'text-yellow-50', bg: 'bg-yellow-600 dark:bg-yellow-500' },
        error: { text: 'text-red-50', bg: 'bg-red-600 dark:bg-red-500' },
      },
      options: { rounded: 'rounded-full' },
      default: { rounded: true, weight: 'bold', size: 'sm', color: 'regular' },
    },
    card: {
      style: 'block',
      color: {
        primary: {
          div: 'bg-green-200 dark:bg-green-300',
        },
        secondary: {
          div: 'bg-blue-200 dark:bg-blue-300',
        },
        regular: {
          div: 'bg-gray-200 dark:bg-gray-300',
        },
        info: {
          div: 'bg-blue-200 dark:bg-blue-300',
        },
        success: {
          div: 'bg-green-200 dark:bg-green-300',
        },
        warning: {
          div: 'bg-yellow-200 dark:bg-yellow-300',
        },
        error: {
          div: 'bg-red-200 dark:bg-red-300',
        },
      },
      options: {
        rounded: 'rounded-lg',
        border: 'border border-gray-200 dark:border-gray-700',
        shadow: 'shadow-md',
        fit: 'max-w-fit',
      },
      default: { rounded: false, border: true, shadow: false, fit: false, color: 'none', pad: 6 },
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
        error: { div: 'bg-red-100 border-red-500 text-red-700 dark:text-red-800 dark:bg-red-200' },
      },
      options: {
        rounded: 'rounded-lg',
        border: 'border-t-4',
      },
      default: { rounded: true, border: true, size: 'sm', color: 'regular' },
    },
    text: {
      style: 'inline-flex items-center',
      color: {
        primary: { text: 'text-green-800 dark:text-green-300' },
        secondary: { text: 'text-blue-800 dark:text-blue-300' },
        regular: { text: 'text-gray-800 dark:text-gray-300' },
        info: { text: 'text-blue-800 dark:text-blue-300' },
        success: { text: 'text-green-800 dark:text-green-300' },
        warning: { text: 'text-yellow-800 dark:text-yellow-300' },
        error: { text: 'text-red-800 dark:text-red-300' },
      },
      options: {
        underline: 'underline',
        overline: 'overline',
        strikethrough: 'line-through',
        italic: 'italic',
      },
      default: {
        underline: false,
        overline: false,
        strikethrough: false,
        italic: false,
        size: 'sm',
        color: 'regular',
        align: 'left',
        weight: 'medium',
      },
    },
    grid: {
      style: 'grid',
      color: {
        primary: { div: 'bg-green-200 dark:bg-green-300' },
        secondary: { div: 'bg-blue-200 dark:bg-blue-300' },
        regular: { div: 'bg-gray-200 dark:bg-gray-300' },
        info: { div: 'bg-blue-200 dark:bg-blue-300' },
        success: { div: 'bg-green-200 dark:bg-green-300' },
        warning: { div: 'bg-yellow-200 dark:bg-yellow-300' },
        error: { div: 'bg-red-200 dark:bg-red-300' },
      },
      default: {
        cols: 12,
        gap: 4,
        color: 'none',
      },
    },
    spinner: {
      style: 'inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600',
      color: {
        primary: { svg: 'fill-green-600' },
        secondary: { svg: 'fill-blue-600' },
        regular: { svg: 'fill-gray-600 dark:fill-gray-400' },
        info: { svg: 'fill-blue-600' },
        success: { svg: 'fill-green-600' },
        warning: { svg: 'fill-yellow-600' },
        error: { svg: 'fill-red-600' },
      },
      default: { size: 'sm', color: 'regular' },
    },
    badge: {
      style: 'mr-2 px-2.5 py-1',
      color: {
        primary: {
          span: 'bg-green-100 dark:bg-green-200 text-green-800 dark:text-green-800',
          border: 'border-green-300 dark:border-green-400',
        },
        secondary: {
          span: 'bg-blue-100 dark:bg-blue-200 text-blue-800 dark:text-blue-800',
          border: 'border-blue-300 dark:border-blue-400',
        },
        regular: {
          span: 'bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-800',
          border: 'border-gray-300 dark:border-gray-400',
        },
        info: {
          span: 'bg-blue-100 dark:bg-blue-200 text-blue-800 dark:text-blue-800',
          border: 'border-blue-300 dark:border-blue-400',
        },
        success: {
          span: 'bg-green-100 dark:bg-green-200 text-green-800 dark:text-green-800',
          border: 'border-green-300 dark:border-green-400',
        },
        warning: {
          span: 'bg-yellow-100 dark:bg-yellow-200 text-yellow-800 dark:text-yellow-800',
          border: 'border-yellow-300 dark:border-yellow-400',
        },
        error: {
          span: 'bg-red-100 dark:bg-red-200 text-red-800 dark:text-red-800',
          border: 'border-red-300 dark:border-red-400',
        },
      },
      options: {
        rounded: 'rounded',
        pill: 'rounded-full',
        border: 'border',
      },
      exclusions: { pill: 'rounded' },
      default: {
        rounded: false,
        pill: true,
        border: false,
        size: 'sm',
        color: 'regular',
      },
    },
    tag: {
      style: 'mr-2 px-2.5 py-1',
      color: {
        primary: {
          span: 'bg-green-100 dark:bg-green-200 text-green-800 dark:text-green-800',
          border: 'border-green-300 dark:border-green-400',
        },
        secondary: {
          span: 'bg-blue-100 dark:bg-blue-200 text-blue-800 dark:text-blue-800',
          border: 'border-blue-300 dark:border-blue-400',
        },
        regular: {
          span: 'bg-gray-100 dark:bg-gray-200 text-gray-800 dark:text-gray-800',
          border: 'border-gray-300 dark:border-gray-400',
        },
        info: {
          span: 'bg-blue-100 dark:bg-blue-200 text-blue-800 dark:text-blue-800',
          border: 'border-blue-300 dark:border-blue-400',
        },
        success: {
          span: 'bg-green-100 dark:bg-green-200 text-green-800 dark:text-green-800',
          border: 'border-green-300 dark:border-green-400',
        },
        warning: {
          span: 'bg-yellow-100 dark:bg-yellow-200 text-yellow-800 dark:text-yellow-800',
          border: 'border-yellow-300 dark:border-yellow-400',
        },
        error: {
          span: 'bg-red-100 dark:bg-red-200 text-red-800 dark:text-red-800',
          border: 'border-red-300 dark:border-red-400',
        },
      },
      options: {
        rounded: 'rounded',
        pill: 'rounded-full',
        border: 'border',
      },
      exclusions: { pill: 'rounded' },
      default: {
        rounded: false,
        pill: false,
        border: false,
        size: 'sm',
        color: 'regular',
      },
    },
    tabs: {
      style: {
        tab: 'flex flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700',
        underline: 'flex flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700',
        pill: 'flex flex-wrap m-3',
      },
    },
    tab: {
      style: {
        tab: 'mr-2 inline-block py-4 px-4 text-center rounded-t-lg transition',
        underline: 'mr-2 inline-block py-4 px-4 text-center border-b-2 transition',
        pill: 'mr-2 inline-block py-3 px-4 text-center rounded-lg transition',
      },
      default: {
        size: 'md',
        color: 'info',
        weight: 'medium',
      },
      color: {
        primary: {
          a: 'text-green-600 border-green-600 dark:text-green-500 dark:border-green-500',
          pill: 'text-green-50 bg-green-600 dark:bg-green-500',
        },
        secondary: {
          a: 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500',
          pill: 'text-blue-50 bg-blue-600 dark:bg-blue-500',
        },
        regular: {
          a: 'text-gray-600 border-gray-600 dark:text-gray-500 dark:border-gray-500',
          pill: 'text-gray-50 bg-gray-600 dark:bg-gray-500',
        },
        info: {
          a: 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500',
          pill: 'text-blue-50 bg-blue-600 dark:bg-blue-500',
        },
        success: {
          a: 'text-green-600 border-green-600 dark:text-green-500 dark:border-green-500',
          pill: 'text-green-50 bg-green-600 dark:bg-green-500',
        },
        warning: {
          a: 'text-yellow-600 border-yellow-600 dark:text-yellow-500 dark:border-yellow-500',
          pill: 'text-yellow-50 bg-yellow-600 dark:bg-yellow-500',
        },
        error: {
          a: 'text-red-600 border-red-600 dark:text-red-500 dark:border-red-500',
          pill: 'text-red-50 bg-red-600 dark:bg-red-500',
        },
      },
    },
    breadcrumbs: {
      style: {
        nav: 'flex',
        ol: 'inline-flex items-center space-x-2 md:space-x-3',
        li: 'inline-flex items-center',
      },
    },
    breadcrumb: {
      style: {
        a: 'inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
        span: 'ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500',
      },
    },
    form: {
      style: 'space-y-6',
    },
    input: {
      style: 'bg-gray-50 p-2.5 dark:bg-gray-700 transition',
      options: {
        rounded: 'rounded-lg',
        pill: 'rounded-full',
        border: 'border',
      },
      default: {
        rounded: true,
        pill: false,
        border: true,
        size: 'sm',
        color: 'regular',
        weight: 'medium',
      },
      color: {
        primary: {
          input:
            'border-green-300 text-green-900 accent-green-500 focus:ring-2 focus:ring-green-500 focus:border-green- hover:border-green-500 dark:focus:ring-green-500 dark:border-green-600 dark:hover:border-green-400 dark:placeholder-green-400 dark:text-green-100',
        },
        secondary: {
          input:
            'border-blue-300 text-blue-900 accent-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 dark:focus:ring-blue-500 dark:border-blue-600 dark:hover:border-blue-400 dark:placeholder-blue-400 dark:text-blue-100',
        },
        regular: {
          input:
            'border-gray-300 text-gray-900 accent-gray-500 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 hover:border-gray-500 dark:focus:ring-gray-500 dark:border-gray-600 dark:hover:border-gray-400 dark:placeholder-gray-400 dark:text-gray-100',
        },
        info: {
          input:
            'border-blue-300 text-blue-900 accent-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 dark:focus:ring-blue-500 dark:border-blue-600 dark:hover:border-blue-400 dark:placeholder-blue-400 dark:text-blue-100',
        },
        success: {
          input:
            'border-green-300 text-green-900 accent-green-500 focus:ring-2 focus:ring-green-500 focus:border-green-500 hover:border-green-500 dark:focus:ring-green-500 dark:border-green-600 dark:hover:border-green-400 dark:placeholder-green-400 dark:text-green-100',
        },
        warning: {
          input:
            'border-yellow-300 text-yellow-900 accent-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 hover:border-yellow-500 dark:focus:ring-yellow-500 dark:border-yellow-600 dark:hover:border-yellow-400 dark:placeholder-yellow-400 dark:text-yellow-100',
        },
        error: {
          input:
            'border-red-300 text-red-900 accent-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 dark:focus:ring-red-500 dark:border-red-600 dark:hover:border-red-400 dark:placeholder-red-400 dark:text-red-100',
        },
      },
    },
    checkbox: {
      style: {
        div1: 'flex items-start',
        div2: 'flex items-center h-5',
        input: 'w-4 h-4 bg-gray-500 rounded border focus:ring-3',
        div3: 'ml-3 text-sm',
        label: 'font-medium text-gray-900 dark:text-gray-300',
      },
      default: {
        color: 'regular',
      },
      color: {
        primary: {
          checkbox:
            'border-green-300 accent-green-500 focus:ring-green-300 dark:accent-green-500 dark:bg-green-700 dark:border-green-600 dark:focus:accent-green-600 dark:ring-offset-green-800',
        },
        secondary: {
          checkbox:
            'border-blue-300 accent-blue-500 focus:ring-blue-300 dark:accent-blue-500 dark:bg-blue-700 dark:border-blue-600 dark:focus:accent-blue-600 dark:ring-offset-blue-800',
        },
        regular: {
          checkbox:
            'border-gray-300 accent-gray-500 focus:ring-gray-300 dark:accent-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:accent-gray-600 dark:ring-offset-gray-800',
        },
        info: {
          checkbox:
            'border-blue-300 accent-blue-500 focus:ring-blue-300 dark:accent-blue-500 dark:bg-blue-700 dark:border-blue-600 dark:focus:accent-blue-600 dark:ring-offset-blue-800',
        },
        success: {
          checkbox:
            'border-green-300 accent-green-500 focus:ring-green-300 dark:accent-green-500 dark:bg-green-700 dark:border-green-600 dark:focus:accent-green-600 dark:ring-offset-green-800',
        },
        warning: {
          checkbox:
            'border-yellow-300 accent-yellow-500 focus:ring-yellow-300 dark:accent-yellow-500 dark:bg-yellow-700 dark:border-yellow-600 dark:focus:accent-yellow-600 dark:ring-offset-yellow-800',
        },
        error: {
          checkbox:
            'border-red-300 accent-red-500 focus:ring-red-300 dark:accent-red-500 dark:bg-red-700 dark:border-red-600 dark:focus:accent-red-600 dark:ring-offset-red-800',
        },
      },
    },
    a: {
      style: 'hover:underline',
      color: {
        primary: { text: 'text-green-800 dark:text-green-300' },
        secondary: { text: 'text-blue-800 dark:text-blue-300' },
        regular: { text: 'text-gray-800 dark:text-gray-300' },
        info: { text: 'text-blue-800 dark:text-blue-300' },
        success: { text: 'text-green-800 dark:text-green-300' },
        warning: { text: 'text-yellow-800 dark:text-yellow-300' },
        error: { text: 'text-red-800 dark:text-red-300' },
      },
      options: {
        italic: 'italic',
      },
      default: {
        italic: false,
        size: 'sm',
        color: 'info',
        align: 'left',
        weight: 'medium',
      },
    },
    table: {
      style: {
        table: 'overflow-hidden',
        thead: '',
        th: 'px-6 tracking-wider text-left uppercase',
        tbody: '',
        tr: '',
        trStriped: '',
        horizontalDividers: 'border-b',
        td: 'px-6 whitespace-nowrap',
      },
      color: {
        primary: {
          thead: 'bg-gray-100 dark:bg-gray-700',
          tr: 'bg-white dark:bg-gray-800',
          trStriped: 'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-900',
          hover: 'hover:bg-gray-200 dark:hover:bg-gray-700',
          horizontalDividers: 'border-gray-300 dark:border-gray-700',
        },
        secondary: {
          thead: 'bg-blue-100 dark:bg-blue-700',
          tr: 'bg-white dark:bg-blue-800',
          trStriped: 'odd:bg-white even:bg-blue-50 odd:dark:bg-blue-800 even:dark:bg-blue-900',
          hover: 'hover:bg-blue-200 dark:hover:bg-blue-700',
          horizontalDividers: 'border-blue-300 dark:border-blue-700',
        },
        regular: {
          thead: 'bg-gray-100 dark:bg-gray-700/50',
          tr: 'bg-white dark:bg-gray-800',
          trStriped:
            'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800/50 even:dark:bg-gray-900/50',
          hover: 'hover:bg-gray-200 dark:hover:bg-gray-700',
          horizontalDividers: 'border-gray-300 dark:border-gray-700/50',
        },
        info: {
          thead: 'bg-blue-100 dark:bg-blue-700/50',
          tr: 'bg-white dark:bg-blue-800',
          trStriped:
            'odd:bg-white even:bg-blue-50 odd:dark:bg-blue-800/50 even:dark:bg-blue-900/50',
          hover: 'hover:bg-blue-200 dark:hover:bg-blue-700',
          horizontalDividers: 'border-blue-300 dark:border-blue-700/50',
        },
        success: {
          thead: 'bg-gray-100 dark:bg-gray-700',
          tr: 'bg-white dark:bg-gray-800',
          trStriped: 'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-900',
          hover: 'hover:bg-gray-200 dark:hover:bg-gray-700',
          horizontalDividers: 'border-gray-300 dark:border-gray-700',
        },
        warning: {
          thead: 'bg-gray-100 dark:bg-gray-700',
          tr: 'bg-white dark:bg-gray-800',
          trStriped: 'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-900',
          hover: 'hover:bg-gray-200 dark:hover:bg-gray-700',
          horizontalDividers: 'border-gray-300 dark:border-gray-700',
        },
        error: {
          thead: 'bg-gray-100 dark:bg-gray-700',
          tr: 'bg-white dark:bg-gray-800',
          trStriped: 'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-900',
          hover: 'hover:bg-gray-200 dark:hover:bg-gray-700',
          horizontalDividers: 'border-gray-300 dark:border-gray-700',
        },
      },
      options: {
        rounded: 'rounded-lg',
        shadow: 'shadow-md',
      },
      default: {
        hoverable: false,
        rounded: true,
        shadow: true,
        color: 'regular',
        padHead: 3,
        padBody: 4,
      },
    },
    sider: {
      style: 'flex flex-col pr-6 pl-3 overflow-hidden',
      options: {
        rounded: 'rounded-r-xl',
      },
      default: {
        rounded: false,
      },
    },
    navlink: {
      style: {
        navlink:
          'py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700',
        active: 'text-white dark:text-white',
        inactive: 'text-gray-700 dark:text-gray-400',
      },
    },
    navlinkitem: {
      style: {
        navlink: 'block py-2.5 px-4 transition duration-200 hover:bg-blue-700 hover:text-white',
        active: 'text-white dark:text-white bg-blue-700 dark:bg-blue-700',
        inactive: 'text-gray-700 dark:text-gray-400',
      },
    },
  },
}
