import { FC, ReactNode } from 'react'

type TooltipProps = {
  className?: string
  message: string
  children: ReactNode
}

export const Tooltip: FC<TooltipProps> = ({ className, message, children }) => {
  return (
    <span className={`group relative ${className || ''}`}>
      <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
        {message}
      </span>
      {children}
    </span>
  )
}

/*
    <span className="flex relative flex-col items-center group text-gray-800 dark:text-gray-300">
      {children}
      <span className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
        <span className="relative z-10 p-2 text-lg leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md">
          {message}
        </span>
        <span className="w-3 h-3 -mt-2 rotate-45 bg-gray-600"></span>
      </span>
    </span>

 */
