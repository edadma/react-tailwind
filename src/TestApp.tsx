import React, { FC, useState } from 'react'
import { ThemeProvider } from './ThemeProvider'
import { ModeProvider } from './ModeProvider'
import { ModeSwitcher } from './ModeSwitcher'
import { Select } from './Select'

const TestApp: FC = () => {
  const options = [
    { label: 'Fruit', value: 'fruit' },
    { label: 'Vegetable', value: 'vegetable' },
    { label: 'Meat', value: 'meat' },
  ]

  const [value, setValue] = useState('fruit')

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) =>
    setValue(event.currentTarget.value)

  return (
    <ThemeProvider>
      <ModeProvider>
        <ModeSwitcher />
        <br />
        <Select label="What do we eat?" options={options} value={value} onChange={handleChange} />
      </ModeProvider>
    </ThemeProvider>
  )
}

export default TestApp
