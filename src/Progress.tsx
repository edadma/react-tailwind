import React, { useContext } from 'react'
import { Role, Size, Weight } from './types'
import { colorClass, optionProps, sizeClass, ThemeContext, weightClass } from './ThemeContext'

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
    <div
      className={`${optionProps(t, other, 'progress', 'rounded')} ${
        t.component.progress.style.bar
      }`}
    >
      <div
        className={`${colorClass(t, 'progress', role, 'bg')} ${sizeClass(
          t,
          'progress',
          size,
          'text'
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
    <div
      className={`${sizeClass(t, 'progress', size, 'height')} ${optionProps(
        t,
        other,
        'progress',
        'rounded'
      )} ${t.component.progress.style.bar}`}
    >
      <div
        className={`${sizeClass(t, 'progress', size, 'height')} ${colorClass(
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
