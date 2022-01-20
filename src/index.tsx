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
      <Tabs
        type="pill"
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
      <Tabs
        type="tab"
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
