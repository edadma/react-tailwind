import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Progress } from './Progress'
import { DEFAULT_THEME, ThemeContext } from './ThemeContext'

const App: React.FC = () => (
  <ThemeContext.Provider value={DEFAULT_THEME}>
    <Progress value={45} size="lg" role="success" />
  </ThemeContext.Provider>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
