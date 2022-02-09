import React, { FC } from 'react'
import { useTheme } from './ThemeProvider'

interface FixedProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  visible: boolean
}

export const Fixed: FC<FixedProps> = ({ children, className, visible, ...rest }) => {
  const { background } = useTheme()

  return (
    <div
      className={`fixed ${visible ? 'visible' : 'invisible'} ${background} ${className || ''}`}
      {...rest}
    >
      {children}
    </div>
  )
}
