import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

interface CardProps {}

export const Card: React.FC<CardProps> = ({ children, ...other }) => {
  const t = useContext(ThemeContext)

  return (
    <div
      onClick={() => {
        alert('asdf')
      }}
      className="p-6"
    >
      {children}
    </div>
  )
}

// todo: dark:bg-gray-800 dark:border-gray-700
