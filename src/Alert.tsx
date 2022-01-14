import React, { useContext } from 'react'
import { optionProps, ThemeContext } from './ThemeContext'

interface AlertProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rounded?: boolean
  border?: boolean
  shadow?: boolean
}

export const Alert: React.FC<AlertProps> = ({ children, ...other }) => {
  const t = useContext(ThemeContext)

  return (
    <div
      className={`${optionProps(t, other, 'alert', 'rounded', 'border', 'shadow')} ${
        t.component.alert.style
      }`}
      {...other}
    >
      {children}
    </div>
  )
}
