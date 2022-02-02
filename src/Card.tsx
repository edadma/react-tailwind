import React from 'react'
import { colorClass, optionProps, padClass, useTheme } from './ThemeProvider'
import { Color, Pad } from './types'

interface CardProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rounded?: boolean
  border?: boolean
  shadow?: boolean
  fit?: boolean
  bg?: Color
  pad?: Pad
}

export const Card: React.FC<CardProps> = (props) => {
  const { children, className, rounded, border, shadow, fit, bg, pad, ...other } = props
  const { theme } = useTheme()

  return (
    <div
      className={`${optionProps(
        theme,
        props,
        'card',
        'rounded',
        'border',
        'shadow',
        'fit'
      )} ${colorClass(theme, 'card', bg, 'div')} ${padClass(theme, 'card', pad)} ${
        theme.component.card.style
      } ${className || ''}`}
      {...other}
    >
      {children}
    </div>
  )
}
