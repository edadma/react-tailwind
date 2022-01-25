import React from 'react'
import { colorClass, optionProps, sizeClass, useTheme, weightClass } from './ThemeProvider'
import { Color, Size, Weight } from './types'

interface LinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  italic?: boolean
  family?: 'sans' | 'serif' | 'mono'
  role?: Color
  size?: Size
  weight?: Weight
}

export const Link: React.FC<LinkProps> = (props) => {
  const { children, className, href, role, size, weight, italic, ...other } = props
  const { theme } = useTheme()

  return (
    <a
      href={href}
      className={`${colorClass(theme, 'link', role, 'text')} ${sizeClass(
        theme,
        'link',
        size,
        'text'
      )} ${optionProps(theme, props, 'link', 'italic')} ${weightClass(theme, 'link', weight)} ${
        theme.component.link.style
      } ${className || ''}`}
      {...other}
    >
      {children}
    </a>
  )
}
