import React, { FC, useState } from 'react'
// import { useTheme } from './ThemeProvider'

interface PaginationProps {
  current?: number
  pageSize?: number
  total: number
  prev?: string
  next?: string
  onChange?: (page: number) => void
}

export const Pagination: FC<PaginationProps> = (props) => {
  const { current = 1, pageSize = 50, total, prev = 'Prev', next = 'Next', onChange } = props
  // const { theme } = useTheme()
  const [page, setPage] = useState(current)

  function handleChange(n: number) {
    setPage(page + n)

    if (onChange) onChange(page + n)
  }

  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        <span className="font-semibold text-gray-900 dark:text-white">
          {(page - 1) * pageSize + 1}
        </span>{' '}
        to{' '}
        <span className="font-semibold text-gray-900 dark:text-white">
          {page * pageSize > total ? total : page * pageSize}
        </span>{' '}
        of <span className="font-semibold text-gray-900 dark:text-white">{total}</span>
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          disabled={page === 1}
          onClick={() => handleChange(-1)}
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            className="mr-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          {prev}
        </button>
        <button
          disabled={page === Math.ceil(total / pageSize)}
          onClick={() => handleChange(1)}
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {next}
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
