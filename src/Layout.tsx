import React, { FC } from 'react'
import { colorClass, optionProps, padClass, useTheme } from './ThemeProvider'
import { Color } from './types'

interface RowLayoutProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const RowLayout: FC<RowLayoutProps> = (props) => {
  const { children, className, ...other } = props
  // const { theme } = useTheme()

  return (
    <div className="min-h-screen flex flex-row" {...other}>
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
  border?: boolean
  width?: string
  bg?: Color
}

export const Sider: FC<SiderProps> = (props) => {
  const { children, className, rounded, bg, width, ...other } = props
  // const { theme } = useTheme()

  return (
    <div
      className={`flex flex-col w-56 bg-white rounded-r-xl overflow-hidden ${className || ''}`}
      {...other}
    >
      <div className="py-4">{children}</div>
    </div>
  )
}
