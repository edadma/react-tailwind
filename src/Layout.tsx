import React, { FC } from 'react'
import { colorClass, optionProps, padClass, useTheme } from './ThemeProvider'
import { Color } from './types'

interface RowLayoutProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const RowLayout: FC<RowLayoutProps> = (props) => {
  const { children, className, ...other } = props
  // const { theme } = useTheme()

  return (
    <div className="min-w-screen flex flex-row" {...other}>
      {children}
    </div>
  )
}

interface ColLayoutProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ColLayout: FC<ColLayoutProps> = (props) => {
  const { children, className, ...other } = props
  // const { theme } = useTheme()

  return (
    <div className="min-h-screen flex flex-col" {...other}>
      {children}
    </div>
  )
}

interface ContentProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Content: FC<ContentProps> = (props) => {
  const { children, className, ...other } = props
  // const { theme } = useTheme()

  return (
    <div className={`flex-1 ${className || ''}`} {...other}>
      {children}
    </div>
  )
}

interface SiderProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rounded?: boolean
  width?: number | false
}

export const Sider: FC<SiderProps> = (props) => {
  const { children, className, rounded, width, ...other } = props
  const { theme } = useTheme()

  return (
    <div
      className={`${theme.component.sider.style} ${optionProps(theme, props, 'sider', 'rounded')} ${
        width ? theme.width[width] : ''
      } ${className || ''}`}
      {...other}
    >
      {children}
    </div>
  )
}
