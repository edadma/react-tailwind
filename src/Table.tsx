import React, { FC, ReactNode } from 'react'
import { optionProps, useTheme } from './ThemeProvider'
import { Text } from './Text'
import { Align } from './types'

export type TableCellRenderer = (data: any, record?: any, index?: string) => ReactNode // todo: should 'index' be the property name of 'data'?

export interface TableColumn {
  title: React.ReactNode
  index: string
  key?: string
  align?: Align
  render?: TableCellRenderer
  classes?: string
}

interface TableProps
  extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  columns: TableColumn[]
  data: any[]
  bordered?: boolean
  striped?: boolean
  hoverable?: boolean
  noHeader?: boolean
  thead?: string
  tbody?: string
  trHead?: string
  trBody?: string
}

const DEFAULT_CELL_RENDERER: TableCellRenderer = (data) => <Text>{data}</Text>

export const Table: FC<TableProps> = (props) => {
  const {
    className,
    columns,
    data,
    bordered,
    striped,
    hoverable,
    noHeader,
    thead,
    tbody,
    trHead,
    trBody,
    ...other
  } = props
  const { theme } = useTheme()

  return (
    <table className={`${theme.component.table.style.table} ${className || ''}`} {...other}>
      {!noHeader && (
        <thead className={`${theme.component.table.style.thead} ${thead || ''}`}>
          <tr className={trHead || ''}>
            {columns.map(({ title, index, key }, ind) => (
              <th
                scope="col"
                className={theme.component.table.style.th}
                key={key || index.toString()}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody className={`${theme.component.table.style.tbody} ${tbody || ''}`}>
        {data.map((record, row) => (
          <tr
            className={`${trBody || ''} ${optionProps(
              theme,
              props,
              'table',
              // 'rounded',
              // 'border',
              // 'shadow',
              'hoverable'
            )} ${
              striped ? theme.component.table.style.trStriped : theme.component.table.style.tr
            } ${row < data.length - 1 ? theme.component.table.style.horizontalDividers : ''}`}
            key={record.key || row.toString()}
          >
            {columns.map(({ index, key, classes }, col) => (
              <td
                className={`${classes || ''} ${theme.component.table.style.td}`}
                key={key || col.toString()}
              >
                {(columns[col].render ? columns[col].render! : DEFAULT_CELL_RENDERER)(
                  record[index],
                  record,
                  index
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
