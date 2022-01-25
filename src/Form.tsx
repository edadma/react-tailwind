import React, { ReactNode, useContext } from 'react'
import { Color, Size, Weight } from './types'
import { colorClass, optionProps, sizeClass, useTheme, weightClass } from './ThemeProvider'
import { useFormik } from 'formik'
import { Text } from './Text'

export const FormContext = React.createContext<any>(null)

export const useForm = () => useContext(FormContext)

interface FormProps
  extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  init: any
}

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
  border?: boolean
  role?: Color
  inputSize?: Size
  weight?: Weight
  label?: string
  renderError?: (error: string) => ReactNode
  placeholder?: string
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    children,
    className,
    rounded,
    pill,
    border,
    role,
    inputSize,
    weight,
    label,
    renderError,
    ...other
  } = props
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
        onBlur={formik.handleBlur}
        value={formik.values[other.name!]}
        id={other.name}
        className={`${colorClass(
          theme,
          'input',
          formik.touched[other.name!] && formik.errors[other.name!] ? 'error' : role,
          'input'
        )} ${optionProps(theme, props, 'input', 'rounded', 'pill', 'border')} ${sizeClass(
          theme,
          'input',
          inputSize,
          'text'
        )} ${weightClass(theme, 'input', weight)} ${theme.component.input.style} ${
          className || ''
        }`}
        {...other}
      >
        {children}
      </input>
      {formik.touched[other.name!] &&
        formik.errors[other.name!] &&
        (renderError ? (
          <div className="transition-transform">{renderError(formik.errors[other.name!])}</div>
        ) : (
          <div>
            <Text role="error">{formik.errors[other.name!]}</Text>
          </div>
        ))}
    </div>
  )
}

interface CheckboxProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: string
}

export const Checkbox: React.FC<CheckboxProps> = ({ children, className, name }) => {
  const formik = useForm()
  const { theme } = useTheme()

  return (
    <FormContext.Provider value={formik}>
      <div className={theme.component.checkbox.style.div1}>
        <div className={theme.component.checkbox.style.div2}>
          <input
            id={name}
            name={name}
            aria-describedby={name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[name!]}
            type="checkbox"
            className={theme.component.checkbox.style.input + (' ' + className || '')}
          />
        </div>
        <div className={theme.component.checkbox.style.div3}>
          <label htmlFor={name}>{children}</label>
        </div>
      </div>
    </FormContext.Provider>
  )
}
