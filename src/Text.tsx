import React from 'react'
import {
  alignClass,
  colorClass,
  optionProps,
  sizeClass,
  useTheme,
  weightClass,
} from './ThemeProvider'
import { Align, Color, Size, Weight } from './types'

interface TextProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  underline?: boolean
  overline?: boolean
  strikethrough?: boolean
  italic?: boolean
  family?: 'sans' | 'serif' | 'mono'
  role?: Color
  size?: Size
  weight?: Weight
  align?: Align
}

export const Text: React.FC<TextProps> = ({
  children,
  className,
  role,
  size,
  weight,
  align,
  ...other
}) => {
  const { theme } = useTheme()

  return (
    <span
      className={
        `${alignClass(theme, 'text', align)} ${colorClass(theme, 'text', role, 'text')} ${sizeClass(
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
        )} ${weightClass(theme, 'text', weight)}` + (className ? ' ' + className : '')
      }
      {...other}
    >
      {children}
    </span>
  )
}
