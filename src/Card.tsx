import React from 'react'
import { optionProps, padClass, useTheme } from './ThemeProvider'
import { Pad } from './types'

interface CardProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rounded?: boolean
  border?: boolean
  shadow?: boolean
  fit?: boolean
  pad?: Pad
}

export const Card: React.FC<CardProps> = (props) => {
  const { children, className, rounded, border, shadow, fit, pad, ...other } = props
  const { theme, background } = useTheme()

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
      )} ${background} ${padClass(theme, 'card', pad)} ${theme.component.card.style} ${
        className || ''
      }`}
      {...other}
    >
      {children}
    </div>
  )
}
