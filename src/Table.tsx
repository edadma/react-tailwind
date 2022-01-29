import React, { FC } from 'react'
import { optionProps, useTheme } from './ThemeProvider'

export interface TableColumn {
  title: React.ReactNode
  index: string
  key?: string
}

interface TableProps
  extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  columns: TableColumn[]
  data: any[]
  bordered?: boolean
  striped?: boolean
  hoverable?: boolean
}

export const Table: FC<TableProps> = (props) => {
  const { className, columns, data, bordered, striped, hoverable, ...other } = props
  const { theme } = useTheme()

  return (
    <table className={`${theme.component.table.style.table} ${className || ''}`} {...other}>
      <thead className={theme.component.table.style.thead}>
        <tr>
          {columns.map(({ title, index, key }, ind) => (
            <th scope="col" className={theme.component.table.style.th}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, ind) => (
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
            } ${ind < data.length - 1 ? theme.component.table.style.horizontalDividers : ''}`}
          >
            {columns.map(({ index }) => (
              <td className={theme.component.table.style.td}>{row[index]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
