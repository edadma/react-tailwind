import React from 'react'
import { colorClass, optionProps, useTheme } from './ThemeProvider'
import { Color } from './types'

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
  row: 'grid-flow-row',
  col: 'grid-flow-col',
  'row-dense': 'grid-flow-row-dense',
  'col-dense': 'grid-flow-col-dense',
}

interface GridProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cols?: number
  rows?: number
  gap?: number
  gapx?: number
  gapy?: number
  flow?: 'row' | 'col' | 'row-dense' | 'col-dense'
  bg?: Color
}

export const Grid: React.FC<GridProps> = ({
  children,
  className,
  cols,
  rows,
  gap,
  gapx,
  gapy,
  flow,
  bg,
  ...other
}) => {
  const { theme } = useTheme()

  return (
    <div
      className={
        `${colsClass[cols !== undefined ? cols : theme.component.grid.default.cols]} ${
          rows !== undefined ? rowsClass[rows] : ''
        } ${gapClass[gap !== undefined ? gap : theme.component.grid.default.gap]} ${
          gapx !== undefined ? gapxClass[gapx] : ''
        } ${gapy !== undefined ? gapyClass[gapy] : ''} ${
          flow !== undefined ? flowClass[flow] : ''
        } ${colorClass(theme, 'grid', bg, 'div')} ${theme.component.grid.style}` +
        (className ? ' ' + className : '')
      }
      {...other}
    >
      {children}
    </div>
  )
}

const colSpanClass: any = {
  '1': 'col-span-1',
  '2': 'col-span-2',
  '3': 'col-span-3',
  '4': 'col-span-4',
  '5': 'col-span-5',
  '6': 'col-span-6',
  '7': 'col-span-7',
  '8': 'col-span-8',
  '9': 'col-span-9',
  '10': 'col-span-10',
  '11': 'col-span-11',
  '12': 'col-span-12',
  auto: 'col-auto',
  full: 'col-span-full',
}

const colStartClass: any = {
  '1': 'col-start-1',
  '2': 'col-start-2',
  '3': 'col-start-3',
  '4': 'col-start-4',
  '5': 'col-start-5',
  '6': 'col-start-6',
  '7': 'col-start-7',
  '8': 'col-start-8',
  '9': 'col-start-9',
  '10': 'col-start-10',
  '11': 'col-start-11',
  '12': 'col-start-12',
  auto: 'col-start-auto',
}

const colEndClass: any = {
  '1': 'col-end-1',
  '2': 'col-end-2',
  '3': 'col-end-3',
  '4': 'col-end-4',
  '5': 'col-end-5',
  '6': 'col-end-6',
  '7': 'col-end-7',
  '8': 'col-end-8',
  '9': 'col-end-9',
  '10': 'col-end-10',
  '11': 'col-end-11',
  '12': 'col-end-12',
  auto: 'col-end-auto',
}

interface ElemProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  colSpan?: string
  colStart?: string
  colEnd?: string
}

export const Elem: React.FC<ElemProps> = ({
  children,
  className,
  colSpan,
  colStart,
  colEnd,
  ...other
}) => {
  return (
    <div
      className={
        `${colSpan !== undefined ? colSpanClass[colSpan] : ''} ${
          colStart !== undefined ? colStartClass[colStart] : ''
        } ${colEnd !== undefined ? colEndClass[colEnd] : ''}` + (className ? ' ' + className : '')
      }
      {...other}
    >
      {children}
    </div>
  )
}
