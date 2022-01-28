import React from 'react'
import { Card } from './Card'
import { Space } from './Space'
import { ModeSwitcher } from './ModeSwitcher'
import { ThemeSwitcher } from './ThemeSwitcher'
import { DefaultTheme } from './themes/DefaultTheme'
import { CB3Theme } from './themes/CB3Theme'
import { ThemeProvider } from './ThemeProvider'
import { ModeProvider } from './ModeProvider'

export const ExampleTable: React.FC = () => {
  return (
    <ThemeProvider>
      <ModeProvider>
        <Card>
          <Space>
            <ModeSwitcher />
            <ThemeSwitcher value={DefaultTheme} />
            <ThemeSwitcher value={CB3Theme} />
          </Space>
        </Card>
        <Card>
          <table className="overflow-hidden rounded-lg shadow-md">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-right text-gray-700 uppercase dark:text-gray-400"
                >
                  Price
                </th>
                <th scope="col" className="relative py-3 px-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </td>
                <td className="text-right py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  $2999
                </td>
                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple Magic Mouse 2
                </td>
                <td className="text-right py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  $99
                </td>
                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </ModeProvider>
    </ThemeProvider>
  )
}
