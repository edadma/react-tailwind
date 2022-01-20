import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {
  Button,
  Card,
  ModeProvider,
  Progress,
  ModeSwitcher,
  Alert,
  Grid,
  Spinner,
  Badge,
  Elem,
  Tabs,
  Text,
} from './index'
import { ThemeProvider } from './ThemeProvider'
import { DefaultTheme } from './themes/DefaultTheme'
import { CB3Theme } from './themes/CB3Theme'
import { ThemeSwitcher } from './ThemeSwitcher'
// import { HiMail } from 'react-icons/hi'

const App: React.FC = () => (
  <ThemeProvider>
    <ModeProvider>
      <ul className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
        <li className="mr-2">
          <a
            href="#"
            aria-current="page"
            className="inline-block py-4 px-4 text-sm font-medium text-center text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-700 dark:text-blue-500"
          >
            Profile
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          >
            Dashboard
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Settings
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Contacts
          </a>
        </li>
        <li>
          <a className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
            Disabled
          </a>
        </li>
      </ul>
      <Tabs
        role="info"
        panes={[
          {
            tab: 'One',
            pane: (
              <Card>
                <Text>One</Text>
              </Card>
            ),
          },
          {
            tab: 'Two',
            pane: (
              <Card>
                <Text>Two</Text>
              </Card>
            ),
          },
        ]}
      />
      <Card>
        <ModeSwitcher /> <ThemeSwitcher value={DefaultTheme} /> <ThemeSwitcher value={CB3Theme} />
      </Card>
      <Card>
        <Card pad={4} bg="info">
          <Grid cols={5}>
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
          </Grid>
        </Card>
        <Card>
          <Grid cols={5}>
            <Progress value={45} />
            <Progress role="info" value={45} />
            <Progress role="success" value={45} />
            <Progress role="warning" value={45} />
            <Progress role="error" value={45} />
            <Progress label value={45} />
            <Progress label role="info" value={45} />
            <Progress label role="success" value={45} />
            <Progress label role="warning" value={45} />
            <Progress label role="error" value={45} />
          </Grid>
        </Card>
        <Card>
          <Grid cols={5}>
            <Alert>This is an alert.</Alert>
            <Alert role="info">This is an alert.</Alert>
            <Alert role="success">This is an alert.</Alert>
            <Alert role="warning">This is an alert.</Alert>
            <Alert role="error">This is an alert.</Alert>
          </Grid>
        </Card>
        <Card>
          <Grid cols={5}>
            <Spinner />
            <Spinner role="info" />
            <Spinner role="success" />
            <Spinner role="warning" />
            <Spinner role="error" />
          </Grid>
        </Card>
        <Card>
          <Grid cols={5}>
            <Elem>
              <Badge>Badge</Badge>
            </Elem>
            <Elem>
              <Badge role="info">Badge</Badge>
            </Elem>
            <Elem>
              <Badge role="success">Badge</Badge>
            </Elem>
            <Elem>
              <Badge role="warning">Badge</Badge>
            </Elem>
            <Elem>
              <Badge role="error">Badge</Badge>
            </Elem>
          </Grid>
        </Card>
      </Card>
    </ModeProvider>
  </ThemeProvider>
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
export { ModeSwitcher } from './ModeSwitcher'
export { Text } from './Text'
export { Grid, Elem } from './Grid'
export { ThemeProvider } from './ThemeProvider'
export { Badge } from './Badge'
export { Spinner } from './Spinner'
export { Tabs } from './Tabs'
