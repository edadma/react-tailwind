import React from 'react'
import { colorClass, sizeClass, useTheme } from './ThemeProvider'
import { Color, Size } from './types'

interface SpinnerProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: Color
  size?: Size
}

export const Spinner: React.FC<SpinnerProps> = ({ children, color, size, ...other }) => {
  const { theme } = useTheme()

  return (
    <div
      style={{ borderTopColor: 'transparent' }}
      className={`${sizeClass(theme, 'spinner', size, 'text')} ${colorClass(
        theme,
        'spinner',
        color,
        'div'
      )} ${theme.component.spinner.style}`}
      {...other}
    >
      {children}
    </div>
  )
}
