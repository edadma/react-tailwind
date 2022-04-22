import React, { FC, useState } from 'react'
import { ThemeProvider } from './ThemeProvider'
import { ModeProvider } from './ModeProvider'
import { ModeSwitcher } from './ModeSwitcher'
import { Select } from './Select'

const TestApp: FC = () => {
  const options = [
    { label: 'Fruit', value: 'fruit' },
    { label: 'Vegetable', value: 'vegetable' },
    { label: 'Meat', value: 'meat' },
  ]

  const [value, setValue] = useState('fruit')

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) =>
    setValue(event.currentTarget.value)

  return (
    <ThemeProvider>
      <ModeProvider>
        <ModeSwitcher />
        <div className="inline-block relative">
          <button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            className="mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Dropdown button{' '}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            id="dropdown"
            className="absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
        qwer
        <p>zxcv asdf fdasjl ksfda jl dsfaj kldajlk dsfa jlfdasjk l</p>
        <p>zxcv asdf fdasjl ksfda jl dsfaj kldajlk dsfa jlfdasjk l</p>
        {/**/}
        {/*<br />*/}
        {/*<Select label="What do we eat?" options={options} value={value} onChange={handleChange} />*/}
        {/*<div className="py-12 ">*/}
        {/*  <div className="mx-auto container max-w-[228px] px-4 py-4 bg-white rounded relative">*/}
        {/*    <p className="text-sm font-semibold leading-none text-gray-800">Tooltip Title</p>*/}
        {/*    <p className=" text-xs leading-none text-gray-600 pt-2 pb-2">Tooltip</p>*/}
        {/*    <p className=" text-xs leading-none text-gray-600 pt-2 pb-2">Tooltip</p>*/}
        {/*    <p className=" text-xs leading-none text-gray-600 pt-2 pb-2">Tooltip</p>*/}
        {/*    <svg*/}
        {/*      className="absolute z-10 bottom-[-10px] "*/}
        {/*      width="16"*/}
        {/*      height="10"*/}
        {/*      viewBox="0 0 16 10"*/}
        {/*      fill="none"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*    >*/}
        {/*      <path d="M8 10L0 0L16 1.41326e-06L8 10Z" fill="white" />*/}
        {/*    </svg>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </ModeProvider>
    </ThemeProvider>
  )
}

export default TestApp
