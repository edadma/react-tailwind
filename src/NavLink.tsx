import React, { FC } from 'react'
import { NavLink as NavLinkRouter, NavLinkProps as NavLinkRouterProps } from 'react-router-dom'
import { useTheme } from './ThemeProvider'

interface NavLinkProps extends Omit<NavLinkRouterProps, 'className'> {
  className?: string
}

export const NavLink: FC<NavLinkProps> = (props) => {
  const { children, className, ...other } = props
  const { theme } = useTheme()

  return (
    <NavLinkRouter
      className={({ isActive }) =>
        `${theme.component.navlink.style.navlink} ${
          isActive ? theme.component.navlink.style.active : theme.component.navlink.style.inactive
        } ${className || ''}`
      }
      {...other}
    >
      {children}
    </NavLinkRouter>
  )
}
