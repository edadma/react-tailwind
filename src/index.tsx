import React, { useState } from 'react'
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
  Tab,
  Text,
  Breadcrumbs,
  Breadcrumb,
  Space,
  Input,
  Form,
  Checkbox,
  Link,
} from './index'
import { ThemeProvider } from './ThemeProvider'
import { DefaultTheme } from './themes/DefaultTheme'
import { CB3Theme } from './themes/CB3Theme'
import { ThemeSwitcher } from './ThemeSwitcher'
import { Home } from './Icons'
import * as yup from 'yup'

const App: React.FC = () => {
  const [data, setData] = useState({})

  return (
    <ThemeProvider>
      <ModeProvider>
        <Card>
          <Space>
            <ModeSwitcher />
            <ThemeSwitcher value={DefaultTheme} />
            <ThemeSwitcher value={CB3Theme} />
          </Space>
        </Card>
        <Card>
          <Grid cols={3}>
            <Elem className="max-w-sm">
              <Form
                init={{
                  initialValues: { email: '', password: '', remember: false },
                  validationSchema: yup.object({
                    email: yup
                      .string()
                      .email('Must be a valid email.')
                      .required('Email is required.'),
                    password: yup
                      .string()
                      .min(8, 'Password must be at least 8 characters.')
                      .required('Password is required.'),
                  }),
                  onSubmit: setData,
                }}
              >
                <Input
                  name="email"
                  label="Your email"
                  placeholder="name@company.com"
                  className="w-full"
                />
                <Input
                  type="password"
                  name="password"
                  label="Your password"
                  placeholder="••••••••"
                  className="w-full"
                />
                <Checkbox name="remember">Remember me</Checkbox>
                <Button type="submit">Login</Button>
              </Form>
              <Card className="mt-5">
                <Text className="mb-2">Form values:</Text>
                <pre className="text-white">{JSON.stringify(data, null, 2)}</pre>
              </Card>
            </Elem>
            <Elem className="max-w-sm">
              <Form
                init={{
                  initialValues: { email: '', password: '', passwordConfirm: '', remember: false },
                  validationSchema: yup.object({
                    email: yup
                      .string()
                      .required('Email is required.')
                      .email('Must be a valid email.'),
                    password: yup
                      .string()
                      .required('Password is required.')
                      .min(8, 'Password must be at least 8 characters.'),
                    passwordConfirm: yup
                      .string()
                      .required('Confirmed password is required.')
                      .min(8, 'Confirmed password must be at least 8 characters.')
                      .oneOf([yup.ref('password')], 'Passwords do not match'),
                  }),
                  onSubmit: setData,
                }}
              >
                <Input
                  name="email"
                  label="Your email"
                  placeholder="name@company.com"
                  pill
                  className="w-full"
                />
                <Input
                  type="password"
                  name="password"
                  label="Your desired password"
                  placeholder="••••••••"
                  pill
                  className="w-full"
                />
                <Input
                  type="password"
                  name="passwordConfirm"
                  label="Confirm your password"
                  placeholder="••••••••"
                  pill
                  className="w-full"
                />
                <Checkbox name="agree">
                  <Text>I agree with the</Text>&nbsp;
                  <Link href="#">terms and conditions</Link>
                </Checkbox>
                <Button type="submit" pill className="w-full">
                  Login
                </Button>
              </Form>
              <Card className="mt-5">
                <Text className="mb-2">Form values:</Text>
                <pre className="text-white">{JSON.stringify(data, null, 2)}</pre>
              </Card>
            </Elem>
            <Elem>
              <Badge role="success">Badge</Badge>
            </Elem>
          </Grid>
        </Card>
        <Card>
          <Breadcrumbs>
            <Breadcrumb>
              <Home /> Home
            </Breadcrumb>
            <Breadcrumb>Projects</Breadcrumb>
            <Breadcrumb>react-tailwind</Breadcrumb>
          </Breadcrumbs>
        </Card>
        <Card>
          <Grid cols={5}>
            <Elem>
              <Tabs type="tab" role="regular">
                <Tab label="One">
                  <Card>
                    <Text>One</Text>
                  </Card>
                </Tab>
                <Tab label="Two">
                  <Card>
                    <Text>Two</Text>
                  </Card>
                </Tab>
              </Tabs>
            </Elem>
            <Elem>
              <Tabs type="tab" role="info">
                <Tab label="One">
                  <Card>
                    <Text>One</Text>
                  </Card>
                </Tab>
                <Tab label="Two">
                  <Card>
                    <Text>Two</Text>
                  </Card>
                </Tab>
              </Tabs>
            </Elem>
            <Elem>
              <Tabs type="tab" role="success">
                <Tab label="One">
                  <Card>
                    <Text>One</Text>
                  </Card>
                </Tab>
                <Tab label="Two">
                  <Card>
                    <Text>Two</Text>
                  </Card>
                </Tab>
              </Tabs>
            </Elem>
            <Elem>
              <Tabs type="tab" role="warning">
                <Tab label="One">
                  <Card>
                    <Text>One</Text>
                  </Card>
                </Tab>
                <Tab label="Two">
                  <Card>
                    <Text>Two</Text>
                  </Card>
                </Tab>
              </Tabs>
            </Elem>
            <Elem>
              <Tabs type="tab" role="error">
                <Tab label="One">
                  <Card>
                    <Text>One</Text>
                  </Card>
                </Tab>
                <Tab label="Two">
                  <Card>
                    <Text>Two</Text>
                  </Card>
                </Tab>
              </Tabs>
            </Elem>
          </Grid>
        </Card>
        <Card>
          <Grid cols={5}>
            <Elem>
              <Tabs type="underline" role="regular">
                <Tab label="One">
                  <Card>
                    <Text>One</Text>
                  </Card>
                </Tab>
                <Tab label="Two">
                  <Card>
                    <Text>Two</Text>
                  </Card>
                </Tab>
              </Tabs>
            </Elem>
            <Elem>
              <Tabs type="underline" role="info">
                <Tab label="One">
                  <Card>
                    <Text>One</Text>
                  </Card>
                </Tab>
                <Tab label="Two">
                  <Card>
                    <Text>Two</Text>
                  </Card>
                </Tab>
              </Tabs>
            </Elem>
            <Elem>
              <Tabs type="underline" role="success">
                <Tab label="One">
                  <Card>
                    <Text>One</Text>
                  </Card>
                </Tab>
                <Tab label="Two">
                  <Card>
                    <Text>Two</Text>
                  </Card>
                </Tab>
              </Tabs>
            </Elem>
            <Elem>
              <Tabs type="underline" role="warning">
                <Tab label="One">
                  <Card>
                    <Text>One</Text>
                  </Card>
                </Tab>
                <Tab label="Two">
                  <Card>
                    <Text>Two</Text>
                  </Card>
                </Tab>
              </Tabs>
            </Elem>
            <Elem>
              <Tabs type="underline" role="error">
                <Tab label="One">
                  <Card>
                    <Text>One</Text>
                  </Card>
                </Tab>
                <Tab label="Two">
                  <Card>
                    <Text>Two</Text>
                  </Card>
                </Tab>
              </Tabs>
            </Elem>
          </Grid>
        </Card>
        <Card>
          <Grid cols={5}>
            <Elem>
              <Tabs type="pill" role="regular">
                <Tab label="One">
                  <Card>
                    <Text>One</Text>
                  </Card>
                </Tab>
                <Tab label="Two">
                  <Card>
                    <Text>Two</Text>
                  </Card>
                </Tab>
              </Tabs>
            </Elem>
            <Elem>
              <Tabs type="pill" role="info">
                <Tab label="One">
                  <Card>
                    <Text>One</Text>
                  </Card>
                </Tab>
                <Tab label="Two">
                  <Card>
                    <Text>Two</Text>
                  </Card>
                </Tab>
              </Tabs>
            </Elem>
            <Elem>
              <Tabs type="pill" role="success">
                <Tab label="One">
                  <Card>
                    <Text>One</Text>
                  </Card>
                </Tab>
                <Tab label="Two">
                  <Card>
                    <Text>Two</Text>
                  </Card>
                </Tab>
              </Tabs>
            </Elem>
            <Elem>
              <Tabs type="pill" role="warning">
                <Tab label="One">
                  <Card>
                    <Text>One</Text>
                  </Card>
                </Tab>
                <Tab label="Two">
                  <Card>
                    <Text>Two</Text>
                  </Card>
                </Tab>
              </Tabs>
            </Elem>
            <Elem>
              <Tabs type="pill" role="error">
                <Tab label="One">
                  <Card>
                    <Text>One</Text>
                  </Card>
                </Tab>
                <Tab label="Two">
                  <Card>
                    <Text>Two</Text>
                  </Card>
                </Tab>
              </Tabs>
            </Elem>
          </Grid>
        </Card>
        <Card>
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
            <Elem>
              <Badge border>Badge</Badge>
            </Elem>
            <Elem>
              <Badge border role="info">
                Badge
              </Badge>
            </Elem>
            <Elem>
              <Badge border role="success">
                Badge
              </Badge>
            </Elem>
            <Elem>
              <Badge border role="warning">
                Badge
              </Badge>
            </Elem>
            <Elem>
              <Badge border role="error">
                Badge
              </Badge>
            </Elem>
          </Grid>
        </Card>
      </ModeProvider>
    </ThemeProvider>
  )
}

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
export { Tabs, Tab } from './Tabs'
export { Form, Input, Checkbox } from './Form'
export { Breadcrumbs, Breadcrumb } from './Breadcrumbs'
export { Space } from './Space'
export { Link } from './Link'
