import React, { useContext } from 'react'
import { colorClass, optionProps, sizeClass, ThemeContext } from './ThemeContext'
import { Role, Size } from './types'

interface AlertProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rounded?: boolean
  border?: boolean
  role?: Role
  size?: Size
}

export const Alert: React.FC<AlertProps> = ({ children, role, size, ...other }) => {
  const t = useContext(ThemeContext)

  return (
    <div
      className={`${sizeClass(t, 'alert', size, 'text')} ${colorClass(
        t,
        'alert',
        role,
        'div'
      )} ${optionProps(t, other, 'alert', 'rounded', 'border')} ${t.component.alert.style}`}
      {...other}
    >
      {children}
    </div>
  )
}
