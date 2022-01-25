import React, { FC, ReactNode, useContext } from 'react'
import { Color, Size, Weight } from './types'
import { colorClass, optionProps, sizeClass, useTheme, weightClass } from './ThemeProvider'
import { useFormik } from 'formik'
import { Text } from './Text'
import _ from 'lodash'

const FormContext = React.createContext<any>(null)

export const useForm = () => useContext(FormContext)

interface FormProps
  extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  init: any
}

export const Form: FC<FormProps> = ({ children, className, init }) => {
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

export const Input: FC<InputProps> = (props) => {
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
  const id = _.uniqueId('input-')

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[other.name!]}
        id={id}
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
  role?: Color
}

export const Checkbox: FC<CheckboxProps> = ({ children, className, name, role }) => {
  const formik = useForm()
  const { theme } = useTheme()
  const id = _.uniqueId('checkbox-')

  return (
    <div className={theme.component.checkbox.style.div1}>
      <div className={theme.component.checkbox.style.div2}>
        <input
          id={id}
          name={name}
          aria-describedby={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name!]}
          type="checkbox"
          className={`${theme.component.checkbox.style.input} ${colorClass(
            theme,
            'checkbox',
            role,
            'checkbox'
          )} ${className || ''}`}
        />
      </div>
      <div className={theme.component.checkbox.style.div3}>
        <label className={theme.component.checkbox.style.label} htmlFor={id}>
          {children}
        </label>
      </div>
    </div>
  )
}
