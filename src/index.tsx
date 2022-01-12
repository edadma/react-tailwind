import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Button, Card } from './index'
import { DEFAULT_THEME, ThemeContext } from './ThemeContext'
import { HiMail } from 'react-icons/hi'

const App: React.FC = () => (
  <ThemeContext.Provider value={DEFAULT_THEME}>
    <Card>
      <Button outlined role="info">
        asdf
      </Button>
      <Button role="info">asdf</Button>
    </Card>
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
