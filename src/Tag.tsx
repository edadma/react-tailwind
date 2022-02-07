import React from 'react'
import { colorClass, optionProps, sizeClass, useTheme, weightClass } from './ThemeProvider'
import { Color, Size, Weight } from './types'

interface TagProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  color?: Color
  size?: Size
  weight?: Weight
  rounded?: boolean
  pill?: boolean
  border?: boolean
}

export const Tag: React.FC<TagProps> = (props) => {
  const { children, className, color, size, weight, rounded, pill, border, ...other } = props
  const { theme } = useTheme()

  return (
    <span
      className={`${colorClass(theme, 'tag', color, 'span')} ${colorClass(
        theme,
        'tag',
        color,
        'border'
      )} ${sizeClass(theme, 'tag', size, 'text')} ${optionProps(
        theme,
        props,
        'tag',
        'rounded',
        'pill',
        'border'
      )} ${theme.component.tag.style} ${weightClass(theme, 'tag', weight)} ${className || ''}`}
      {...other}
    >
      {children}
    </span>
  )
}
