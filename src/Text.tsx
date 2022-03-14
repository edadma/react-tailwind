import React from 'react'
import {
  alignClass,
  colorClass,
  familyClass,
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
  color?: Color
  size?: Size
  weight?: Weight
  align?: Align
}

export const Text: React.FC<TextProps> = (props) => {
  const {
    children,
    className,
    color,
    size,
    weight,
    align,
    underline,
    overline,
    strikethrough,
    italic,
    family,
    ...other
  } = props
  const { theme } = useTheme()

  return (
    <span
      className={`${alignClass(theme, 'text', align)} ${colorClass(
        theme,
        'text',
        color,
        'text'
      )} ${sizeClass(theme, 'text', size, 'text')} ${optionProps(
        theme,
        props,
        'text',
        'underline',
        'overline',
        'strikethrough',
        'italic'
      )} ${weightClass(theme, 'text', weight)} ${familyClass(theme, 'text', family)} ${
        theme.component.text.style
      } ${className || ''}`}
      {...other}
    >
      {children}
    </span>
  )
}
