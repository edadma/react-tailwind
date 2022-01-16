import React, { useContext } from 'react'
import { Role, Size, Weight } from './types'
import {
  colorClass,
  HEIGHT,
  optionProps,
  sizeClass,
  TEXTS,
  ThemeContext,
  weightClass,
} from './ThemeContext'

interface ProgressProps {
  size?: Size
  role?: Role
  value: number
  label?: boolean
  rounded?: boolean
  weight?: Weight
}

export const Progress: React.FC<ProgressProps> = ({
  children,
  value,
  size,
  role,
  label,
  weight,
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
        )} ${colorClass(t, 'progress', role, 'text')} ${weightClass(
          t,
          'progress',
          weight
        )} ${optionProps(t, other, 'progress', 'rounded')} ${
          t.component.progress.style.progressLabel
        }`}
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
        )} ${optionProps(t, other, 'progress', 'rounded')}`}
        style={{ width: v }}
      />
    </div>
  )
}
