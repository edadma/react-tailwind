import React, { ReactNode, useContext } from 'react'
import { Color, Size, Weight } from './types'
import { colorClass, optionProps, sizeClass, useTheme, weightClass } from './ThemeProvider'
import { useFormik } from 'formik'
import { Text } from './Text'

interface FormProps
  extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  init: any
}

export const FormContext = React.createContext<any>(null)

export const useForm = () => useContext(FormContext)

export const Form: React.FC<FormProps> = ({ children, className, init }) => {
  const formik = useFormik(init)
  const { theme } = useTheme()

  return (
    <FormContext.Provider value={formik}>
      <form
        className={`${theme.component.form.style} ${className || ''}`}
        onSubmit={formik.handleSubmit}
      >
        {children}
      </form>
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
  renderError?: (error: string) => ReactNode
  placeholder?: string
}

export const Input: React.FC<InputProps> = ({
  children,
  className,
  role,
  inputSize,
  weight,
  label,
  renderError,
  ...other
}) => {
  const { theme } = useTheme()
  const formik = useForm()

  return (
    <div>
      {label && (
        <label
          htmlFor={other.name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <input
        onChange={formik.handleChange}
        value={formik.values[other.name!]}
        id={other.name}
        className={`${colorClass(theme, 'input', role, 'input')} ${optionProps(
          theme,
          other,
          'input',
          'rounded',
          'pill'
        )} ${sizeClass(theme, 'input', inputSize, 'input')} ${weightClass(
          theme,
          'input',
          weight
        )} ${theme.component.input.style} ${className || ''}`}
        {...other}
      >
        {children}
      </input>
      {formik.errors[other.name!] &&
        (renderError ? (
          <div>{renderError(formik.errors[other.name!])}</div>
        ) : (
          <div>
            <Text role="error">{formik.errors[other.name!]}</Text>
          </div>
        ))}
    </div>
  )
}
