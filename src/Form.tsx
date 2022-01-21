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

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  rounded?: boolean
  pill?: boolean
  icon?: boolean
  transition?: boolean
  role?: Color
  inputSize?: Size
  weight?: Weight
  label?: string
}

// export const Input: React.FC<InputProps> = ({
//   children,
//   className,
//   role,
//   inputSize,
//   weight,label,type,
//   ...other
// }) => {
//   const { theme } = useTheme()
//
//   return (
//       <div className="mb-6">
//           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
//           <input type={type} id="email"
//                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                  placeholder="name@flowbite.com" required>
//           <input
//       className={`${colorClass(theme, 'input', role, 'filledBg')} ${colorClass(
//         theme,
//         'input',
//         role,
//         'filledText'
//       )} ${colorClass(theme, 'input', role, 'filledHoverBg')} ${sizeClass(
//         theme,
//         'input',
//         inputSize,
//         'text'
//       )} ${colorClass(theme, 'input', role, 'focusRing')} ${optionProps(
//         theme,
//         other,
//         'input',
//         'rounded',
//         'pill',
//         'icon',
//         'transition'
//       )} ${weightClass(theme, 'input', weight)} ${theme.component.input.style} ${
//         className || ''
//       }`}
//       {...other}
//     >
//       {children}
//     </input>
//       </div>
//   )
// }
