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
  th?: string
  td?: string
}

interface TableProps
  extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  columns: TableColumn[]
  data: any[]
  bordered?: boolean
  rounded?: boolean
  shadow?: boolean
  striped?: boolean
  hoverable?: boolean
  header?: boolean
  thead?: string
  tbody?: string
  trHead?: string
  trBody?: string
  color?: string
}

const DEFAULT_CELL_RENDERER: TableCellRenderer = (data) => <Text>{data}</Text>

export const Table: FC<TableProps> = (props) => {
  const {
    className,
    columns,
    data,
    bordered,
    rounded,
    shadow,
    striped,
    hoverable,
    header = true,
    thead,
    tbody,
    trHead,
    trBody,
    color,
    ...other
  } = props
  const { theme } = useTheme()

  return (
    <table
      className={`${theme.component.table.style.table} ${optionProps(
        theme,
        props,
        'table',
        'rounded',
        'shadow'
      )} ${className || ''}`}
      {...other}
    >
      {header && (
        <thead className={`${theme.component.table.style.thead} ${thead || ''}`}>
          <tr className={trHead || ''}>
            {columns.map(({ title, index, key, th }, ind) => (
              <th
                scope="col"
                className={`${theme.component.table.style.th} ${th || ''}`}
                key={key || index.toString()}
              >
                {typeof title === 'string' ? <Text size="xs">{title}</Text> : title}
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
              // 'border',
              'hoverable'
            )} ${
              striped ? theme.component.table.style.trStriped : theme.component.table.style.tr
            } ${row < data.length - 1 ? theme.component.table.style.horizontalDividers : ''}`}
            key={record.key || row.toString()}
          >
            {columns.map(({ index, key, td }, col) => (
              <td
                className={`${td || ''} ${theme.component.table.style.td}`}
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
