import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Button, Card, ModeProvider, Progress } from './index'
import { Switcher } from './Switcher'
import { DEFAULT_THEME, ThemeContext } from './ThemeContext'
// import { HiMail } from 'react-icons/hi'

const App: React.FC = () => (
  <ThemeContext.Provider value={DEFAULT_THEME}>
    <ModeProvider init="light">
      <Switcher />
      <Card>
        <Card>
          <Button>regular</Button>
          <Button role="info">info</Button>
          <Button role="success">success</Button>
          <Button role="warning">warning</Button>
          <Button role="error">error</Button>
          <Button outlined>regular</Button>
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
        <Card>
          <Progress size="lg" value={45} />
          <div className="p-0.5" />
          <Progress value={45} />
          <div className="p-0.5" />
          <Progress value={45} />
          <div className="p-0.5" />
          <Progress value={45} />
          <div className="p-0.5" />
          <Progress value={45} />
          <div className="p-0.5" />
          <Progress value={45} />
          <div className="p-0.5" />
          <Progress value={45} />
          <div className="p-0.5" />
          <Progress value={45} />
        </Card>
      </Card>
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
