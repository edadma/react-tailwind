import React, { Children, useState } from 'react'
import { Size, Weight, Color } from './types'
import { colorClass, sizeClass, useTheme, weightClass } from './ThemeProvider'

interface TabsProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  size?: Size
  weight?: Weight
  role?: Color
  type?: 'tab' | 'underline' | 'pill'
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  size,
  weight,
  role,
  type = 'underline',
  ...other
}) => {
  const [active, setActive] = useState(0)
  const { theme } = useTheme()
  const tabs = Children.toArray(children)
  console.log(tabs)

  return (
    <>
      <ul className={theme.component.tabs.style[type]}>
        {Children.map(tabs, (child, index) =>
          React.cloneElement(child as React.ReactElement, {
            active,
            setActive,
            index,
            size,
            weight,
            role,
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
  role?: Color
  type?: 'tab' | 'underline' | 'pill'
}

export const Tab: React.FC<TabProps> = ({
  active,
  setActive,
  index,
  label,
  size,
  weight,
  role,
  type = 'underline',
  ...other
}) => {
  const { theme } = useTheme()
  console.log(active, setActive, index, label, size, weight, role)

  return (
    <li
      className={`${theme.component.tab.style[type].li} ${
        type === 'underline'
          ? active
            ? `active ${colorClass(theme, 'tabs', role, 'a')}`
            : 'text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
          : type === 'tab'
          ? active
            ? `bg-gray-200 rounded-t-lg active dark:bg-gray-700 ${colorClass(
                theme,
                'tabs',
                role,
                'a'
              )}`
            : 'text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700'
          : type === 'pill'
          ? active
            ? `active ${colorClass(theme, 'tabs', role, 'pill')}`
            : 'text-gray-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700'
          : '' // todo: fullWidth type https://flowbite.com/docs/components/tabs/#full-width-tabs
      } ${sizeClass(theme, 'tabs', size, 'text')} ${weightClass(theme, 'tabs', weight)} ${
        theme.component.tab.style[type].a
      }`}
      onClick={() => setActive?.(index!)}
    >
      {label}
    </li>
  )
}
