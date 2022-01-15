import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Button, Card, ModeProvider } from './index'
import { Switcher } from './Switcher'
import { DEFAULT_THEME, ThemeContext } from './ThemeContext'
// import { HiMail } from 'react-icons/hi'

const App: React.FC = () => (
  <ThemeContext.Provider value={DEFAULT_THEME}>
    <ModeProvider init="light">
      <Button role="info">info</Button>
      {/*
      <Switcher />
      <Card>
        <Card rounded>
          <Button role="info">info</Button>
          <Button role="success">success</Button>
          <Button role="warning">warning</Button>
          <Button role="error">error</Button>
          <Button outlined role="info">
            info
          </Button>
          <Button outlined role="success">
            success
          </Button>
          <Button outlined role="warning">
            warning
          </Button>
          <Button outlined role="error">
            error
          </Button>
        </Card>
      </Card>
*/}
    </ModeProvider>
  </ThemeContext.Provider>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

export { Button } from './Button'
export { Progress } from './Progress'
export { Card } from './Card'
export { ModeProvider } from './ModeProvider'
