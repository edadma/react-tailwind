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
  className,
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
        )} ${t.weight[weight || t.component.button.defaults.weight]} ${t.component.button.style}` +
        (className ? ' ' + className : '')
      }
      {...other}
    >
      {children}
    </button>
  )
}
