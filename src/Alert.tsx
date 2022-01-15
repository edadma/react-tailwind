import React, { useContext } from 'react'
import { optionProps, ThemeContext } from './ThemeContext'
import { Role } from './types'

interface AlertProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rounded?: boolean
  role?: Role
}

export const Alert: React.FC<AlertProps> = ({ children, role, ...other }) => {
  const t = useContext(ThemeContext)

  return (
    <div
      className={`${optionProps(t, other, 'alert', 'rounded')} ${t.component.alert.style}`}
      {...other}
    >
      {children}
    </div>
  )
}
