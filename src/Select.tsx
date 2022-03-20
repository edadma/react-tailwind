import React, { ReactNode } from 'react'
import { colorClass, optionProps, sizeClass, useTheme, weightClass } from './ThemeProvider'
import { Color, Size, Weight } from './types'
import { Text } from './Text'

interface SelectProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  color?: Color
  size?: Size
  weight?: Weight
  rounded?: boolean
  pill?: boolean
  border?: boolean
  label?: ReactNode
  value: any
  options: { label: string; value: any }[]
}

export const Select: React.FC<SelectProps> = ({ label, value, options, onChange }) => {
  const { theme } = useTheme()

  return (
    <label>
      {typeof label === 'string' ? <Text>{label}</Text> : label}{' '}
      <select className="text-amber-300 bg-teal-500 rounded-full" value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  )
}
