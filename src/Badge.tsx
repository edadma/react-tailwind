import React from 'react'
import { colorClass, optionProps, sizeClass, useTheme, weightClass } from './ThemeProvider'
import { Color, Size, Weight } from './types'

interface BadgeProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  role?: Color
  size?: Size
  weight?: Weight
  rounded?: boolean
  border?: boolean
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  role,
  size,
  weight,
  ...other
}) => {
  const { theme } = useTheme()

  return (
    <span
      className={`${colorClass(theme, 'badge', role, 'span')} ${colorClass(
        theme,
        'badge',
        role,
        'border'
      )} ${sizeClass(theme, 'badge', size, 'text')} ${optionProps(
        theme,
        other,
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
