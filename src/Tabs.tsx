import React, { ReactNode, useState } from 'react'
import { Size, Align, Weight, Color } from './types'
import { colorClass, sizeClass, useTheme, weightClass } from './ThemeProvider'

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
  const { theme } = useTheme()
  console.log(
    `${
      false
        ? `active ${colorClass(theme, 'tabs', role, 'a')}`
        : 'text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
    } ${sizeClass(theme, 'tabs', size, 'text')} ${weightClass(theme, 'tabs', weight)} ${
      theme.component.tabs.style.a
    }`
  )

  return (
    <>
      <div className={theme.component.tabs.style.div} {...other}>
        <ul className={theme.component.tabs.style.ul}>
          {panes.map(({ tab }, index) => (
            <li className={theme.component.tabs.style.li}>
              <a
                className={`${
                  index === active
                    ? `active ${colorClass(theme, 'tabs', role, 'a')}`
                    : 'text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                } ${sizeClass(theme, 'tabs', size, 'text')} ${weightClass(theme, 'tabs', weight)} ${
                  theme.component.tabs.style.a
                }`}
                onClick={() => setActive(index)}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>{panes[active].pane}</div>
    </>
  )
}
