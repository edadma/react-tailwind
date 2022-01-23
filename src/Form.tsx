import React, { useContext } from 'react'
import { Color, Size, Weight } from './types'
import { colorClass, optionProps, sizeClass, useTheme, weightClass } from './ThemeProvider'
import { useFormik } from 'formik'

interface FormProps {
  onSubmit: (data: any) => void
  initialValues: any
}

export const FormContext = React.createContext<any>(null)

export const useForm = () => useContext(FormContext)

export const Form: React.FC<FormProps> = ({ children, onSubmit, initialValues }) => {
  const formik = useFormik({ onSubmit, initialValues })

  return (
    <FormContext.Provider value={formik}>
      <form onSubmit={formik.handleSubmit}>{children}</form>
    </FormContext.Provider>
  )
}

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  rounded?: boolean
  pill?: boolean
  role?: Color
  inputSize?: Size
  weight?: Weight
  label?: string
  placeholder?: string
}

export const Input: React.FC<InputProps> = ({
  children,
  className,
  role,
  inputSize,
  weight,
  label,
  ...other
}) => {
  const { theme } = useTheme()
  const formik = useForm()

  return (
    <div className="mb-6">
      {label && (
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <input
        className={`${colorClass(theme, 'input', role, 'input')} ${colorClass(
          theme,
          'input',
          role,
          'focus'
        )} ${optionProps(theme, other, 'input', 'rounded', 'pill')} ${sizeClass(
          theme,
          'input',
          inputSize,
          'input'
        )} ${weightClass(theme, 'input', weight)} ${theme.component.input.style} ${
          className || ''
        }`}
        {...other}
      >
        {children}
      </input>
    </div>
  )
}
