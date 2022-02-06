import React, { FC } from 'react'
import { Color, Size, Weight } from './types'
import { colorClass, optionProps, sizeClass, useTheme, weightClass } from './ThemeProvider'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  outlined?: boolean
  rounded?: boolean
  pill?: boolean
  icon?: boolean
  transition?: boolean
  color?: Color
  size?: Size
  weight?: Weight
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    color,
    outlined,
    rounded,
    pill,
    size,
    weight,
    icon,
    transition,
    ...other
  } = props
  const { theme } = useTheme()

  return (
    <button
      type="button"
      className={`${colorClass(
        theme,
        'button',
        color,
        outlined ? 'outlined' : 'filled'
      )} ${sizeClass(theme, 'button', size, 'text')} ${colorClass(
        theme,
        'button',
        color,
        'focus'
      )} ${optionProps(
        theme,
        props,
        'button',
        'rounded',
        'pill',
        'icon',
        'transition'
      )} ${weightClass(theme, 'button', weight)} ${theme.component.button.style} ${
        className || ''
      }`}
      {...other}
    >
      {children}
    </button>
  )
}
