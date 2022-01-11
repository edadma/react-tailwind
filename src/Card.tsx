import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

interface CardProps {}

export const Card: React.FC<CardProps> = ({ children, ...other }) => {
  const t = useContext(ThemeContext)

  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  )
}
