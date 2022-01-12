import React, { useContext } from 'react'
import { Role, Size } from './types'
import {
  BG,
  colorClass,
  HOVERDS,
  RING,
  sizeClass,
  TEXTS,
  TEXTLS,
  ThemeContext,
  BORDER,
  TEXTDS,
  HOVERLS,
  TEXTLSH,
} from './ThemeContext'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  outline?: boolean
  rounded?: boolean
  role?: Role
  size?: Size
}

export const Button: React.FC<ButtonProps> = ({
  children,
  role,
  outline,
  rounded,
  size,
  ...other
}) => {
  const t = useContext(ThemeContext)

  return (
    <button
      type="button"
      className={
        (outline
          ? `${colorClass(t, role, BORDER)} ${colorClass(t, role, TEXTDS)} ${colorClass(
              t,
              role,
              TEXTLSH
            )} ${colorClass(t, role, HOVERLS)}`
          : `${colorClass(t, role, BG)} ${colorClass(t, role, TEXTLS)} ${colorClass(
              t,
              role,
              HOVERDS
            )}`) +
        ` ${sizeClass(t, size, TEXTS)} ${colorClass(t, role, RING)} ${
          rounded ? t.defaults.rounded : t.component.button.defaults.rounded
        } ${t.component.button.style}`
      }
      {...other}
    >
      {children}
    </button>
  )
}

// todo: also had ' dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
//<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button>
