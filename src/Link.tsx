import React, { FC } from 'react'
import { Color, Size, Weight } from './types'
import { colorClass, optionProps, sizeClass, useTheme, weightClass } from './ThemeProvider'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'

interface LinkProps extends RouterLinkProps {
  outlined?: boolean
  rounded?: boolean
  pill?: boolean
  icon?: boolean
  transition?: boolean
  color?: Color
  size?: Size
  weight?: Weight
}

export const Link: FC<LinkProps> = (props) => {
  const {
    children,
    className,
    color,
    outlined,
    rounded,
    pill,
    size,
    weight,
    icon,
    transition,
    ...other
  } = props
  const { theme } = useTheme()

  return (
    <RouterLink
      className={`${colorClass(theme, 'link', color, outlined ? 'outlined' : 'filled')} ${sizeClass(
        theme,
        'link',
        size,
        'text'
      )} ${colorClass(theme, 'link', color, 'focus')} ${optionProps(
        theme,
        props,
        'link',
        'rounded',
        'pill',
        'icon',
        'transition'
      )} ${weightClass(theme, 'link', weight)} ${theme.component.link.style} ${className || ''}`}
      {...other}
    >
      {children}
    </RouterLink>
  )
}
