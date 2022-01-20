import React, { ReactNode, useState } from 'react'
import { Size, Align, Weight, Color } from './types'
import { colorClass, sizeClass, useTheme, weightClass } from './ThemeProvider'

interface TabsProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: Size
  align?: Align
  weight?: Weight
  role?: Color
  type?: 'tab' | 'underline'
  panes: { tab: string; pane: ReactNode }[]
}

export const Tabs: React.FC<TabsProps> = ({
  panes,
  size,
  align,
  weight,
  role,
  type = 'underline',
  ...other
}) => {
  const [active, setActive] = useState(0)
  const { theme } = useTheme()

  return (
    <>
      <ul className={theme.component.tabs.style[type].ul}>
        {panes.map(({ tab }, index) => (
          <li className={theme.component.tabs.style[type].li}>
            <a
              className={`${
                index === active
                  ? `active ${colorClass(theme, 'tabs', role, 'a')}`
                  : 'text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              } ${sizeClass(theme, 'tabs', size, 'text')} ${weightClass(theme, 'tabs', weight)} ${
                theme.component.tabs.style[type].a
              }`}
              onClick={() => setActive(index)}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      <div>{panes[active].pane}</div>
    </>
  )
}
