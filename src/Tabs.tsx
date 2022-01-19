import React, { ReactNode, useState } from 'react'
import { Size, Align, Weight, Color } from './types'

interface TabsProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: Size
  align?: Align
  weight?: Weight
  role?: Color
  panes: { tab: string; pane: ReactNode }[]
}

export const Tabs: React.FC<TabsProps> = ({ panes, size, align, weight, role, ...other }) => {
  const [active, setActive] = useState(0)

  return (
    <>
      <div className={``} {...other}>
        <ul>
          {panes.map(({ tab }, index) => (
            <li className={index === active ? 'is-active' : ''}>
              <a onClick={() => setActive(index)}>{tab}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>{panes[active].pane}</div>
    </>
  )
}
