import { ReactNode } from 'react'
import toast from 'react-hot-toast'
import { Checkmark, Cross, Warning } from './Icons'

interface NotifyParam {
  type?: 'success' | 'error' | 'warning'
  title?: ReactNode
  description?: ReactNode
  duration?: number
}

export const notify = ({ type, title, description, duration }: NotifyParam) =>
  toast.custom(
    (t) => (
      <div
        className="items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <div className="flex">
          {type === 'success' && (
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg text-green-500 bg-green-100 dark:bg-green-700 dark:text-green-200">
              <Checkmark />
            </div>
          )}
          {type === 'error' && (
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg text-red-500 bg-red-100 dark:bg-red-700 dark:text-red-200">
              <Cross />
            </div>
          )}
          {type === 'warning' && (
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg text-yellow-500 bg-yellow-100 dark:bg-yellow-600 dark:text-yellow-200">
              <Warning />
            </div>
          )}
          <div className="ml-3 ">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{title}</span>
            <div className="text-sm font-normal">{description}</div>
          </div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={() => toast.dismiss(t.id)}
          >
            <span className="sr-only">Close</span>
            <Cross />
          </button>
        </div>
      </div>
    ),
    { duration: duration !== undefined ? duration : 5000 }
  )
