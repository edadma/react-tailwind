import { FC } from 'react'
import { Color, Size } from './types'
import { Text } from './Text'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Tooltip } from './Tooltip'

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
  tooltip?: string
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
  tooltip,
}) => (
  <div>
    <Text color={labelColor} size={labelSize} className="inline-flex">
      {label}
      {tooltip && (
        <Tooltip className="ml-1" message={tooltip}>
          <AiOutlineInfoCircle className="text-lg" />
        </Tooltip>
      )}
    </Text>
    <Text color={valueColor} size={valueSize} className="block">
      {prefix || ''}
      {rounded ? Math.round(value) : fixed ? value.toFixed(fixed) : value}
      {suffix || ''}
    </Text>
  </div>
)
