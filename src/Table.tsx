import React, { FC, ReactNode } from 'react'
import { optionProps, useTheme } from './ThemeProvider'
import { Text } from './Text'
import { Align } from './types'

export type TableCellRenderer = (data: any, record?: any, index?: string) => ReactNode

export interface TableColumn {
  title: React.ReactNode
  index: string
  key?: string
  align?: Align
  render?: TableCellRenderer // todo: should 'index' be the property name of 'data'?
}

interface TableProps
  extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  columns: TableColumn[]
  data: any[]
  bordered?: boolean
  striped?: boolean
  hoverable?: boolean
}

const DEFAULT_CELL_RENDERER: TableCellRenderer = (data) => <Text>{data}</Text>

export const Table: FC<TableProps> = (props) => {
  const { className, columns, data, bordered, striped, hoverable, ...other } = props
  const { theme } = useTheme()

  return (
    <table className={`${theme.component.table.style.table} ${className || ''}`} {...other}>
      <thead className={theme.component.table.style.thead}>
        <tr>
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
      <tbody>
        {data.map((record, row) => (
          <tr
            className={`${optionProps(
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
            {columns.map(({ index, key }, col) => (
              <td className={theme.component.table.style.td} key={key || col.toString()}>
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
