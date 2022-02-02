import React from 'react'
import { colorClass, optionProps, sizeClass, useTheme, weightClass } from './ThemeProvider'
import { Color, Size, Weight } from './types'

interface BadgeProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  color?: Color
  size?: Size
  weight?: Weight
  rounded?: boolean
  border?: boolean
}

export const Badge: React.FC<BadgeProps> = (props) => {
  const { children, className, color, size, weight, rounded, border, ...other } = props
  const { theme } = useTheme()

  return (
    <span
      className={`${colorClass(theme, 'badge', color, 'span')} ${colorClass(
        theme,
        'badge',
        color,
        'border'
      )} ${sizeClass(theme, 'badge', size, 'text')} ${optionProps(
        theme,
        props,
        'badge',
        'rounded',
        'border'
      )} ${theme.component.badge.style} ${weightClass(theme, 'badge', weight)} ${className || ''}`}
      {...other}
    >
      {children}
    </span>
  )
}
