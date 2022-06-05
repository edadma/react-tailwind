import React, { FC, ReactNode, useContext, useId } from 'react'
import { Color, Size, Weight } from './types'
import { colorClass, optionProps, sizeClass, useTheme, weightClass } from './ThemeProvider'
import { useFormik } from 'formik'
import { Text } from './Text'

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
  color?: Color
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
    color,
    inputSize,
    weight,
    label,
    renderError,
    ...other
  } = props
  const { theme } = useTheme()
  const formik = useForm()
  const id = useId()
  const error = formik.touched[other.name!] && formik.errors[other.name!]
  const fadein = `transition-opacity duration-300 opacity-100 ease-in ${
    !error ? 'invisible opacity-0' : ''
  }`

  return (
    <div>
      {label && (
        <label htmlFor={id} className={theme.component.input.style.label}>
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
          formik.touched[other.name!] && formik.errors[other.name!] ? 'error' : color,
          'input'
        )} ${optionProps(theme, props, 'input', 'rounded', 'pill', 'border')} ${sizeClass(
          theme,
          'input',
          inputSize,
          'text'
        )} ${weightClass(theme, 'input', weight)} ${theme.component.input.style.input} ${
          className || ''
        }`}
        {...other}
      >
        {children}
      </input>
      {renderError ? (
        <div className={fadein}>{renderError(formik.errors[other.name!])}</div>
      ) : (
        <div className={fadein}>
          <Text hidden={!formik.touched[other.name!] || !formik.errors[other.name!]} color="error">
            {formik.errors[other.name!]}
          </Text>
        </div>
      )}
    </div>
  )
}

interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  rounded?: boolean
  pill?: boolean
  border?: boolean
  color?: Color
  inputSize?: Size
  weight?: Weight
  label?: string
  renderError?: (error: string) => ReactNode
  placeholder?: string
}

export const TextArea: FC<TextareaProps> = (props) => {
  const {
    children,
    className,
    rounded,
    pill,
    border,
    color,
    inputSize,
    weight,
    label,
    renderError,
    ...other
  } = props
  const { theme } = useTheme()
  const formik = useForm()
  const id = useId()
  const error = formik.touched[other.name!] && formik.errors[other.name!]
  const fadein = `transition-opacity duration-300 opacity-100 ease-in ${
    !error ? 'invisible opacity-0' : ''
  }`

  return (
    <div>
      {label && (
        <label htmlFor={id} className={theme.component.input.style.label}>
          {label}
        </label>
      )}
      <textarea
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[other.name!]}
        id={id}
        className={`${colorClass(
          theme,
          'input',
          formik.touched[other.name!] && formik.errors[other.name!] ? 'error' : color,
          'input'
        )} ${optionProps(theme, props, 'input', 'rounded', 'pill', 'border')} ${sizeClass(
          theme,
          'input',
          inputSize,
          'text'
        )} ${weightClass(theme, 'input', weight)} ${theme.component.input.style.input} ${
          className || ''
        }`}
        {...other}
      >
        {children}
      </textarea>
      {renderError ? (
        <div className={fadein}>{renderError(formik.errors[other.name!])}</div>
      ) : (
        <div className={fadein}>
          <Text hidden={!formik.touched[other.name!] || !formik.errors[other.name!]} color="error">
            {formik.errors[other.name!]}
          </Text>
        </div>
      )}
    </div>
  )
}

interface CheckboxProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: string
  color?: Color
}

export const Checkbox: FC<CheckboxProps> = ({ children, className, name, color }) => {
  const formik = useForm()
  const { theme } = useTheme()
  const id = useId()

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
            color,
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
