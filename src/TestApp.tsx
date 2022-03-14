import { FC } from 'react'
import { ThemeProvider } from './ThemeProvider'
import { ModeProvider } from './ModeProvider'
import { ModeSwitcher } from './ModeSwitcher'
import { Text } from './Text'

const TestApp: FC = () => (
  <ThemeProvider>
    <ModeProvider>
      <ModeSwitcher /> <Text>Hello World!</Text>
    </ModeProvider>
  </ThemeProvider>
)

export default TestApp
