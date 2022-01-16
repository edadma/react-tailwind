import React from 'react'
import { optionProps, useTheme } from './ThemeProvider'

interface CardProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rounded?: boolean
  border?: boolean
  shadow?: boolean
}

export const Card: React.FC<CardProps> = ({ children, ...other }) => {
  const { theme } = useTheme()

  return (
    <div
      className={`${optionProps(theme, other, 'card', 'rounded', 'border', 'shadow')} ${
        theme.component.card.style
      }`}
      {...other}
    >
      {children}
    </div>
  )
}
