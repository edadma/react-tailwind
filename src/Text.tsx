import React from 'react'
import { colorClass, optionProps, sizeClass, useTheme, weightClass } from './ThemeProvider'
import { Color, Size, Weight } from './types'

interface TextProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  underline?: boolean
  overline?: boolean
  strikethrough?: boolean
  italic?: boolean
  family?: 'sans' | 'serif' | 'mono'
  color?: Color
  size?: Size
  weight?: Weight
}

export const Text: React.FC<TextProps> = ({ children, color, size, weight, ...other }) => {
  const { theme } = useTheme()

  return (
    <span
      className={`${colorClass(theme, 'text', color, 'outlinedBorder')} ${sizeClass(
        theme,
        'text',
        size,
        'text'
      )} ${optionProps(
        theme,
        other,
        'text',
        'underline',
        'overline',
        'strikethrough',
        'italic'
      )} ${weightClass(theme, 'text', weight)}`}
      {...other}
    >
      {children}
    </span>
  )
}
