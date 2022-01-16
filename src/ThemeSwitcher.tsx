import React from 'react'
import { Button } from './Button'
import { useTheme } from './ThemeProvider'

export const ThemeSwitcher: React.FC<{ value: any }> = ({ value }) => {
  const { setTheme } = useTheme()

  return <Button onClick={() => setTheme(value)}>{value.name}</Button>
}
