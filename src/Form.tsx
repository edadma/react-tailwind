import React, { useRef } from 'react'
import { Color, Size, Weight } from './types'
import { colorClass, optionProps, sizeClass, useTheme, weightClass } from './ThemeProvider'

interface FormProps {
  onSubmit: (data: any) => void
}

export const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  const form = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={form}
      onSubmit={(e) => {
        e.preventDefault()

        const data = new FormData(e.target as HTMLFormElement)

        onSubmit(Object.fromEntries(data.entries()))
        form.current?.reset()
      }}
    >
      {children}
    </form>
  )
}

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  outlined?: boolean
  rounded?: boolean
  pill?: boolean
  icon?: boolean
  transition?: boolean
  role?: Color
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
  const { theme } = useTheme()

  return (
    <button
      type="button"
      className={
        (outlined
          ? `${colorClass(theme, 'button', role, 'outlinedBorder')} ${colorClass(
              theme,
              'button',
              role,
              'outlinedText'
            )} ${colorClass(theme, 'button', role, 'outlinedHoverBg')} ${colorClass(
              theme,
              'button',
              role,
              'outlinedHoverText'
            )}`
          : `${colorClass(theme, 'button', role, 'filledBg')} ${colorClass(
              theme,
              'button',
              role,
              'filledText'
            )} ${colorClass(theme, 'button', role, 'filledHoverBg')}`) +
        ` ${sizeClass(theme, 'button', size, 'text')} ${colorClass(
          theme,
          'button',
          role,
          'focusRing'
        )} ${optionProps(
          theme,
          other,
          'button',
          'rounded',
          'pill',
          'icon',
          'transition'
        )} ${weightClass(theme, 'button', weight)} ${theme.component.button.style} ${
          className || ''
        }`
      }
      {...other}
    >
      {children}
    </button>
  )
}
