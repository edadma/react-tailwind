import ReactDOM from 'react-dom'
import { StrictMode } from 'react'
import { Demo } from './Demo'

ReactDOM.render(
  <StrictMode>
    <Demo />
  </StrictMode>,
  document.getElementById('root')
)

export { Button } from './Button'
export { Progress } from './Progress'
export { Card } from './Card'
export { ModeProvider } from './ModeProvider'
export { Alert } from './Alert'
export { ModeSwitcher } from './ModeSwitcher'
export { Text } from './Text'
export { Grid, Elem } from './Grid'
export { ThemeProvider } from './ThemeProvider'
export { Badge } from './Badge'
export { Spinner } from './Spinner'
export { Tabs, Tab } from './Tabs'
export { Form, Input, Checkbox } from './Form'
export { Breadcrumbs, Breadcrumb } from './Breadcrumbs'
export { Space } from './Space'
export { Link } from './Link'
