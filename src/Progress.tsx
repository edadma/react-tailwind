import React from 'react'
import { Color, Size, Weight } from './types'
import { colorClass, optionProps, sizeClass, useTheme, weightClass } from './ThemeProvider'

interface ProgressProps {
  size?: Size
  color?: Color
  value: number
  label?: boolean
  rounded?: boolean
  weight?: Weight
}

export const Progress: React.FC<ProgressProps> = ({
  children,
  value,
  size,
  color,
  label,
  weight,
  ...other
}) => {
  const { theme } = useTheme()
  const v = `${value}%`

  return label ? (
    <div
      className={`${optionProps(theme, other, 'progress', 'rounded')} ${
        theme.component.progress.style.bar
      }`}
    >
      <div
        className={`${colorClass(theme, 'progress', color, 'bg')} ${sizeClass(
          theme,
          'progress',
          size,
          'text'
        )} ${colorClass(theme, 'progress', color, 'text')} ${weightClass(
          theme,
          'progress',
          weight
        )} ${optionProps(theme, other, 'progress', 'rounded')} ${
          theme.component.progress.style.progressLabel
        }`}
        style={{ width: v }}
      >
        {v}
      </div>
    </div>
  ) : (
    <div
      className={`${sizeClass(theme, 'progress', size, 'height')} ${optionProps(
        theme,
        other,
        'progress',
        'rounded'
      )} ${theme.component.progress.style.bar}`}
    >
      <div
        className={`${sizeClass(theme, 'progress', size, 'height')} ${colorClass(
          theme,
          'progress',
          color,
          'bg'
        )} ${optionProps(theme, other, 'progress', 'rounded')}`}
        style={{ width: v }}
      />
    </div>
  )
}
