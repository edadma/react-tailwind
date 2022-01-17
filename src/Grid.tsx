import React from 'react'
import { optionProps, useTheme } from './ThemeProvider'

const gapClass = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  7: 'gap-7',
  8: 'gap-8',
  9: 'gap-9',
  10: 'gap-10',
  11: 'gap-11',
  12: 'gap-12',
}

const colsClass: any = {
  '1': 'grid-cols-1',
  '2': 'grid-cols-2',
  '3': 'grid-cols-3',
  '4': 'grid-cols-4',
  '5': 'grid-cols-5',
  '6': 'grid-cols-6',
  '7': 'grid-cols-7',
  '8': 'grid-cols-8',
  '9': 'grid-cols-9',
  '10': 'grid-cols-10',
  '11': 'grid-cols-11',
  '12': 'grid-cols-12',
}

interface RowProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cols?: string
  gap?: string
}

export const Row: React.FC<RowProps> = ({ children, cols, gap, ...other }) => {
  const { theme } = useTheme()

  return (
    <div
      className={`${optionProps(theme, other, 'row', 'rounded', 'border', 'shadow')} ${
        colsClass[cols ? cols : theme.component.row.cols]
      } ${theme.component.row.style}`}
      {...other}
    >
      {children}
    </div>
  )
}

interface ColProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Col: React.FC<ColProps> = ({ children, ...other }) => {
  const { theme } = useTheme()

  return (
    <div className={`${theme.component.col.style}`} {...other}>
      {children}
    </div>
  )
}
