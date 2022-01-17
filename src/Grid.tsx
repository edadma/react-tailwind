import React from 'react'
import { optionProps, useTheme } from './ThemeProvider'

const gapClass: any = {
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

const gapxClass: any = {
  0: 'gap-x-0',
  1: 'gap-x-1',
  2: 'gap-x-2',
  3: 'gap-x-3',
  4: 'gap-x-4',
  5: 'gap-x-5',
  6: 'gap-x-6',
  7: 'gap-x-7',
  8: 'gap-x-8',
  9: 'gap-x-9',
  10: 'gap-x-10',
  11: 'gap-x-11',
  12: 'gap-x-12',
}

const gapyClass: any = {
  0: 'gap-y-0',
  1: 'gap-y-1',
  2: 'gap-y-2',
  3: 'gap-y-3',
  4: 'gap-y-4',
  5: 'gap-y-5',
  6: 'gap-y-6',
  7: 'gap-y-7',
  8: 'gap-y-8',
  9: 'gap-y-9',
  10: 'gap-y-10',
  11: 'gap-y-11',
  12: 'gap-y-12',
}

const colsClass: any = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
}

const rowsClass: any = {
  1: 'grid-rows-1',
  2: 'grid-rows-2',
  3: 'grid-rows-3',
  4: 'grid-rows-4',
  5: 'grid-rows-5',
  6: 'grid-rows-6',
  7: 'grid-rows-7',
  8: 'grid-rows-8',
  9: 'grid-rows-9',
  10: 'grid-rows-10',
  11: 'grid-rows-11',
  12: 'grid-rows-12',
}

const flowClass = {
  row:
}

interface RowProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cols?: number
  rows?: number
  gap?: number
  gapx?: number
  gapy?: number
  flow?: 'row' | 'col' | 'row-dense' | 'col-dense'
}

export const Row: React.FC<RowProps> = ({
  children,
  className,
  cols,
  rows,
  gap,
  gapx,
  gapy,
  flow,
  ...other
}) => {
  const { theme } = useTheme()

  return (
    <div
      className={
        `${colsClass[cols !== undefined ? cols : theme.component.row.default.cols]} ${
          rows !== undefined ? rowsClass[rows] : ''
        } ${gapClass[gap !== undefined ? gap : theme.component.row.default.gap]} ${
          gapx !== undefined ? gapxClass[gapx] : ''
        } ${gapy !== undefined ? gapyClass[gapy] : ''} ${theme.component.row.style}` +
        (className ? ' ' + className : '')
      }
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
