import { FC } from 'react'
import { Color, Size } from './types'
import { Text } from './Text'

type StatisticProps = {
  rounded?: boolean
  fixed?: number
  label: string
  value: number
  prefix?: string
  suffix?: string
  labelColor?: Color
  labelSize?: Size
  valueColor?: Color
  valueSize?: Size
}

export const Statistic: FC<StatisticProps> = ({
  rounded,
  fixed,
  label,
  value,
  prefix,
  suffix,
  labelColor,
  labelSize,
  valueColor = 'info',
  valueSize = '2xl',
}) => (
  <div>
    <Text color={labelColor} size={labelSize}>
      {label}
    </Text>
    <Text color={valueColor} size={valueSize} className="block">
      {prefix || ''}
      {rounded ? Math.round(value) : fixed ? value.toFixed(fixed) : value}
      {suffix || ''}
    </Text>
  </div>
)
