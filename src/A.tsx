import React from 'react'
import { colorClass, optionProps, sizeClass, useTheme, weightClass } from './ThemeProvider'
import { Color, Size, Weight } from './types'

interface AProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  italic?: boolean
  family?: 'sans' | 'serif' | 'mono'
  color?: Color
  size?: Size
  weight?: Weight
}

export const A: React.FC<AProps> = (props) => {
  const { children, className, href, color, size, weight, italic, ...other } = props
  const { theme } = useTheme()

  return (
    <a
      href={href}
      className={`${colorClass(theme, 'a', color, 'text')} ${sizeClass(
        theme,
        'a',
        size,
        'text'
      )} ${optionProps(theme, props, 'a', 'italic')} ${weightClass(theme, 'a', weight)} ${
        theme.component.a.style
      } ${className || ''}`}
      {...other}
    >
      {children}
    </a>
  )
}
