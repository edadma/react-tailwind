import React, { useContext } from 'react'
import { optionProps, ThemeContext } from './ThemeContext'

interface CardProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rounded?: boolean
  border?: boolean
  shadow?: boolean
}

export const Card: React.FC<CardProps> = ({ children, ...other }) => {
  const t = useContext(ThemeContext)

  return (
    <div
      className={`${optionProps(t, other, 'card', 'rounded', 'border', 'shadow')} ${
        t.component.card.style
      }`}
      {...other}
    >
      {children}
    </div>
  )
}

// todo: dark:bg-gray-800 dark:border-gray-700
