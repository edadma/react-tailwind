import React from 'react'
import { colorClass, optionProps, sizeClass, useTheme } from './ThemeProvider'
import { Color, Size } from './types'

interface AlertProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rounded?: boolean
  border?: boolean
  role?: Color
  size?: Size
}

export const Alert: React.FC<AlertProps> = ({ children, role, size, ...other }) => {
  const { theme } = useTheme()

  return (
    <div
      className={`${sizeClass(theme, 'alert', size, 'text')} ${colorClass(
        theme,
        'alert',
        role,
        'div'
      )} ${optionProps(theme, other, 'alert', 'rounded', 'border')} ${theme.component.alert.style}`}
      {...other}
    >
      {children}
    </div>
  )
}
