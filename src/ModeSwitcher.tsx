import React from 'react'
import { Button } from './Button'
import { useMode } from './ModeProvider'
import { HiMoon, HiSun } from 'react-icons/hi'

export const ModeSwitcher: React.FC = () => {
  const { mode, setMode } = useMode()

  return (
    <Button
      icon
      pill
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'dark' ? (
        <HiSun className="w-6 h-6 inline" />
      ) : (
        <HiMoon className="w-6 h-6 inline" />
      )}
    </Button>
  )
}

// <ToggleLight /> : <ToggleDark />

// (
//     <HiSun
//         onClick={() => {
//             setMode('light')
//         }}
//     />
// ) : (
//     <HiMoon
//         onClick={() => {
//             setMode('dark')
//         }}
//     />
// )

//     <HiSun
//     className="h-8 w-8 text-gray-300 m-1 inline"
//     onClick={() => {
//       setMode('light')
//     }}
//   />
// ) : (
//   <HiMoon
//     className="h-8 w-8 text-gray-300 m-1 inline"
//     onClick={() => {
//       setMode('dark')
//     }}
//   />
