import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Button, Card, ModeProvider, Progress, Switcher, Alert } from './index'
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
          <Progress value={45} />
          <div className="p-0.5" />
          <Progress role="info" value={45} />
          <div className="p-0.5" />
          <Progress role="success" value={45} />
          <div className="p-0.5" />
          <Progress role="warning" value={45} />
          <div className="p-0.5" />
          <Progress role="error" value={45} />
          <div className="p-0.5" />
          <Progress label value={45} />
          <div className="p-0.5" />
          <Progress label role="info" value={45} />
          <div className="p-0.5" />
          <Progress label role="success" value={45} />
          <div className="p-0.5" />
          <Progress label role="warning" value={45} />
          <div className="p-0.5" />
          <Progress label role="error" value={45} />
        </Card>
        <Card>
          <Alert>This is an alert.</Alert>
          <Alert role="info">This is an alert.</Alert>
          <Alert role="success">This is an alert.</Alert>
          <Alert role="warning">This is an alert.</Alert>
          <Alert role="error">This is an alert.</Alert>
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
export { Alert } from './Alert'
export { Switcher } from './Switcher'
