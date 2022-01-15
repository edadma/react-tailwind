import React, { useContext } from 'react'
import { Role, Size } from './types'
import { colorClass, HEIGHT, sizeClass, TEXTS, ThemeContext } from './ThemeContext'

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
    <div className={t.component.progress.style.bar}>
      <div
        className={`${colorClass(t, 'progress', role, 'bg')} ${sizeClass(
          t,
          'progress',
          size,
          TEXTS
        )} ${colorClass(
          t,
          'progress',
          role,
          'text'
        )} font-medium text-center p-0.5 leading-none rounded-full`}
        style={{ width: v }}
      >
        {v}
      </div>
    </div>
  ) : (
    <div className={`${sizeClass(t, 'progress', size, HEIGHT)} ${t.component.progress.style.bar}`}>
      <div
        className={`${sizeClass(t, 'progress', size, HEIGHT)} ${colorClass(
          t,
          'progress',
          role,
          'bg'
        )} rounded-full`} // todo: had 'dark:bg-gray-300' at the end
        style={{ width: v }}
      />
    </div>
  )
}
