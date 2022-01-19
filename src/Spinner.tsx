import React from 'react'
import { colorClass, sizeClass, useTheme } from './ThemeProvider'
import { Color, Size } from './types'

interface SpinnerProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  role?: Color
  size?: Size
}

export const Spinner: React.FC<SpinnerProps> = ({ children, role, size, ...other }) => {
  const { theme } = useTheme()

  return (
    <div
      style={{ borderTopColor: 'transparent' }}
      className={`${sizeClass(theme, 'spinner', size, 'div')} ${colorClass(
        theme,
        'spinner',
        role,
        'div'
      )} ${theme.component.spinner.style}`}
      {...other}
    >
      {children}
    </div>
  )
}
