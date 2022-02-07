import ReactDOM from 'react-dom'
import './index.css'
import { StrictMode } from 'react'
import { Demo } from './Demo'
import { EmailDemo } from './EmailDemo'
import { LayoutDemo } from './LayoutDemo'
import { ToastDemo } from './ToastDemo'

ReactDOM.render(
  <StrictMode>
    <ToastDemo />
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
export { A } from './A'
export { Center } from './Center'
export { Between } from './Between'
export { Table } from './Table'
export { Pagination } from './Pagination'
export { Content, RowLayout, ColLayout, Sider } from './Layout'
export { Navbar } from './Navbar'
export { Link } from './Link'
export { NavLink, NavLinkItem } from './NavLink'
export { Tag } from './Tag'
