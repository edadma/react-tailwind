import React, { ReactNode } from 'react'
import { colorClass, optionProps, sizeClass, useTheme, weightClass } from './ThemeProvider'
import { Color, Size, Weight } from './types'
import { Text } from './Text'

interface SelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  color?: Color
  outlined?: boolean
  textSize?: Size
  weight?: Weight
  rounded?: boolean
  pill?: boolean
  border?: boolean
  label?: ReactNode
  value: any
  transition?: boolean
  options: { label: string; value: any }[]
}

export const Select: React.FC<SelectProps> = (props) => {
  const {
    className,
    color,
    outlined,
    rounded,
    pill,
    textSize,
    weight,
    transition,
    label,
    value,
    options,
    onChange,
    ...other
  } = props

  const { theme } = useTheme()

  return (
    <label>
      {typeof label === 'string' ? <Text>{label}</Text> : label}{' '}
      <select
        className={`${colorClass(
          theme,
          'select',
          color,
          outlined ? 'outlined' : 'filled'
        )} ${sizeClass(theme, 'select', textSize, 'text')} ${optionProps(
          theme,
          props,
          'select',
          'rounded',
          'pill',
          'transition'
        )} ${weightClass(theme, 'select', weight)} ${theme.component.select.style} ${
          className || ''
        }`}
        {...other}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  )
}
