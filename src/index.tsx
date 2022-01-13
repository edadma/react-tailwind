import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Button, Card, Mode } from './index'
import { Switcher } from './Switcher'
import { DEFAULT_THEME, ThemeContext } from './ThemeContext'
import { LIGHT_MODE, ModeContext } from './Mode'
// import { HiMail } from 'react-icons/hi'

const App: React.FC = () => (
  <ThemeContext.Provider value={DEFAULT_THEME}>
    <ModeContext.Provider value={LIGHT_MODE}>
      <Mode>
        <Card>
          <Switcher />
        </Card>
      </Mode>
    </ModeContext.Provider>
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
export { Mode } from './Mode'
