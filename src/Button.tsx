import React, { useContext } from 'react'
import { Role, Size } from './types'
import {
  BG,
  colorClass,
  HEIGHT,
  HOVER,
  RING,
  sizeClass,
  TEXT,
  TEXT1,
  ThemeContext,
} from './ThemeContext'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  outlined?: boolean
  rounded?: boolean
  role?: Role
  size?: Size
}

export const Button: React.FC<ButtonProps> = ({
  children,
  role,
  outlined,
  rounded,
  size,
  ...other
}) => {
  const t = useContext(ThemeContext)

  return (
    <button
      type="button"
      className={`${colorClass(t, role, BG)} ${sizeClass(t, size, TEXT)} ${colorClass(
        t,
        role,
        TEXT1
      )} ${colorClass(t, role, HOVER)} focus:ring-4 ${colorClass(
        t,
        role,
        RING
      )} font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2`}
      {...other}
    >
      {children}
    </button>
  )
}

// todo: also had ' dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
//<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button>
