import React, { useContext } from 'react'
import { Role, Size } from './types'
import { BG, colorClass, HEIGHT, sizeClass, TEXT, TEXT1, ThemeContext } from './ThemeContext'

interface ProgressProps {
  size?: Size
  role?: Role
  value: number
  label?: boolean
}

export const Progress: React.FC<ProgressProps> = ({
  children,
  value,
  size,
  role,
  label,
  ...other
}) => {
  const t = useContext(ThemeContext)
  const v = `${value}%`

  return label ? (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className={`${colorClass(t, role, BG)} ${sizeClass(t, size, TEXT)} ${colorClass(
          t,
          role,
          TEXT1
        )} font-medium text-center p-0.5 leading-none rounded-full`}
        style={{ width: v }}
      >
        {v}
      </div>
    </div>
  ) : (
    <div
      className={`${sizeClass(t, size, HEIGHT)} w-full bg-gray-200 rounded-full dark:bg-gray-700`}
    >
      <div
        className={`${sizeClass(t, size, HEIGHT)} ${colorClass(t, role, BG)} rounded-full`} // todo: had 'dark:bg-gray-300' at the end
        style={{ width: v }}
      />
    </div>
  )
}
