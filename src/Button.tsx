import React, { useContext } from 'react'
import { Role, Size, Weight } from './types'
import { colorClass, optionProps, sizeClass, TEXTS, ThemeContext } from './ThemeContext'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  outlined?: boolean
  rounded?: boolean
  pill?: boolean
  icon?: boolean
  role?: Role
  size?: Size
  weight?: Weight
}

export const Button: React.FC<ButtonProps> = ({
  children,
  role,
  outlined,
  size,
  weight,
  ...other
}) => {
  const t = useContext(ThemeContext)

  return (
    <button
      type="button"
      className={
        (outlined
          ? `${colorClass(t, role, 'border')} ${colorClass(t, role, 'textOutlined')} ${colorClass(
              t,
              role,
              'hoverBgOutlined'
            )} ${colorClass(t, role, 'hoverTextLightShade')}`
          : `${colorClass(t, role, 'bg')} ${colorClass(t, role, 'textLightShade')} ${colorClass(
              t,
              role,
              'hoverBg'
            )}`) +
        ` ${sizeClass(t, size, TEXTS)} ${colorClass(t, role, 'focusRing')} ${optionProps(
          t,
          other,
          'button',
          'rounded',
          'pill',
          'icon'
        )} ${t.weight[weight || t.component.button.defaults.weight]} ${t.component.button.style}`
      }
      {...other}
    >
      {children}
    </button>
  )
}

// todo: also had ' dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
//<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button>
