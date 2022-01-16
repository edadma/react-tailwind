import React, { useContext } from 'react'
import { Role, Size, Weight } from './types'
import { colorClass, optionProps, sizeClass, ThemeContext, weightClass } from './ThemeContext'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  outlined?: boolean
  rounded?: boolean
  pill?: boolean
  icon?: boolean
  role?: Role
  size?: Size
  weight?: Weight
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  role,
  outlined,
  size,
  weight,
  ...other
}) => {
  const t = useContext(ThemeContext)

  return (
    <button
      type="button"
      className={
        (outlined
          ? `${colorClass(t, 'button', role, 'outlinedBorder')} ${colorClass(
              t,
              'button',
              role,
              'outlinedText'
            )} ${colorClass(t, 'button', role, 'outlinedHoverBg')} ${colorClass(
              t,
              'button',
              role,
              'outlinedHoverText'
            )}`
          : `${colorClass(t, 'button', role, 'filledBg')} ${colorClass(
              t,
              'button',
              role,
              'filledText'
            )} ${colorClass(t, 'button', role, 'filledHoverBg')}`) +
        ` ${sizeClass(t, 'button', size, 'text')} ${colorClass(
          t,
          'button',
          role,
          'focusRing'
        )} ${optionProps(t, other, 'button', 'rounded', 'pill', 'icon')} ${weightClass(
          t,
          'button',
          weight
        )} ${t.component.button.style}` +
        (className ? ' ' + className : '')
      }
      {...other}
    >
      {children}
    </button>
  )
}
