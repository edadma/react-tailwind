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
  textSize?: Size
  weight?: Weight
  rounded?: boolean
  pill?: boolean
  border?: boolean
  label?: ReactNode
  value: any
  options: { label: string; value: any }[]
}

export const Select: React.FC<SelectProps> = (props) => {
  const {
    className,
    color,
    rounded,
    pill,
    textSize,
    weight,
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
        className={`${colorClass(theme, 'select', color)} ${sizeClass(
          theme,
          'select',
          textSize,
          'text'
        )} ${colorClass(theme, 'select', color, 'focus')} ${optionProps(
          theme,
          props,
          'select',
          'rounded',
          'pill',
          'icon',
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
