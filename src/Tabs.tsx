import React, { Children, FC, useState } from 'react'
import { Size, Weight, Color } from './types'
import { colorClass, sizeClass, useTheme, weightClass } from './ThemeProvider'
import componentPropType from './util'

interface TabsProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  size?: Size
  weight?: Weight
  color?: Color
  type?: 'tab' | 'underline' | 'pill'
}

export const Tabs: FC<TabsProps> = ({
  children,
  size,
  weight,
  color,
  type = 'underline',
  ...other
}) => {
  const [active, setActive] = useState(0)
  const { theme } = useTheme()
  const tabs = Children.toArray(children)

  return (
    <>
      <ul className={theme.component.tabs.style[type]} {...other}>
        {Children.map(tabs, (child, index) =>
          React.cloneElement(child as React.ReactElement, {
            active: index === active,
            setActive,
            index,
            size,
            weight,
            color: color,
            type,
          })
        )}
      </ul>
      <div>{(tabs[active] as React.ReactElement).props.children}</div>
    </>
  )
}

interface TabProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  active?: boolean
  setActive?: React.Dispatch<React.SetStateAction<number>>
  index?: number
  label: string
  size?: Size
  weight?: Weight
  color?: Color
  type?: 'tab' | 'underline' | 'pill'
}

export const Tab: FC<TabProps> = ({
  active,
  setActive,
  index,
  label,
  size,
  weight,
  color,
  type = 'underline',
  ...other
}) => {
  const { theme } = useTheme()

  return (
    <li
      className={`${theme.component.tab.style[type]} ${
        type === 'underline'
          ? active
            ? `active ${colorClass(theme, 'tab', color, 'a')}`
            : 'text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
          : type === 'tab'
          ? active
            ? `bg-gray-200 rounded-t-lg active dark:bg-gray-700 ${colorClass(
                theme,
                'tab',
                color,
                'a'
              )}`
            : 'text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700'
          : type === 'pill'
          ? active
            ? `active ${colorClass(theme, 'tab', color, 'pill')}`
            : 'text-gray-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700'
          : '' // todo: fullWidth type https://flowbite.com/docs/components/tabs/#full-width-tabs
      } ${sizeClass(theme, 'tab', size, 'text')} ${weightClass(theme, 'tab', weight)} ${
        theme.component.tab.style[type]
      }`}
      onClick={() => setActive?.(index!)}
    >
      {label}
    </li>
  )
}

Tabs.propTypes = {
  children: componentPropType(Tab),
}
