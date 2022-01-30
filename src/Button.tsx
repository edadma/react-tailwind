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
  hasIcon?: boolean
  transition?: boolean
  role?: Color
  size?: Size
  weight?: Weight
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    role,
    outlined,
    rounded,
    pill,
    size,
    weight,
    hasIcon,
    transition,
    ...other
  } = props
  const { theme } = useTheme()
  const roundedOpt = pill ? false : rounded

  return (
    <button
      type="button"
      className={
        (outlined
          ? `${colorClass(theme, 'button', role, 'outlinedBorder')} ${colorClass(
              theme,
              'button',
              role,
              'outlinedText'
            )} ${colorClass(theme, 'button', role, 'outlinedHoverBg')} ${colorClass(
              theme,
              'button',
              role,
              'outlinedHoverText'
            )}`
          : `${colorClass(theme, 'button', role, 'filledBg')} ${colorClass(
              theme,
              'button',
              role,
              'filledText'
            )} ${colorClass(theme, 'button', role, 'filledHoverBg')}`) +
        ` ${sizeClass(theme, 'button', size, 'text')} ${colorClass(
          theme,
          'button',
          role,
          'focusRing'
        )} ${optionProps(
          theme,
          props,
          'button',
          'rounded',
          'pill',
          'hasIcon',
          'transition'
        )} ${weightClass(theme, 'button', weight)} ${theme.component.button.style} ${
          className || ''
        }`
      }
      {...other}
    >
      {children}
    </button>
  )
}
