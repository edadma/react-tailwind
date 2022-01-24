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
        <Card className="max-w-sm">
          <form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="repeat-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Repeat password
              </label>
              <input
                type="password"
                id="repeat-password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-900 dark:text-gray-300">
                  I agree with the{' '}
                  <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                    terms and conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register new account
            </button>
          </form>
        </Card>
        <Card className="max-w-sm">
          <Form
            init={{
              initialValues: { email: '', password: '', remember: false },
              validationSchema: yup.object({
                email: yup.string().email('Must be a valid email.').required('Email is required.'),
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
            <Button type="submit" role="info">
              Login
            </Button>
          </Form>
        </Card>
        <Card>
          <pre className="text-white">{JSON.stringify(data, null, 2)}</pre>
        </Card>
        <Card>
          <Space>
            <ModeSwitcher />
            <ThemeSwitcher value={DefaultTheme} />
            <ThemeSwitcher value={CB3Theme} />
          </Space>
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
        <Card>
          <Grid cols={3}>
            <Elem>
              <Badge>Badge</Badge>
            </Elem>
            <Elem>
              <Badge role="info">Badge</Badge>
            </Elem>
            <Elem>
              <Badge role="success">Badge</Badge>
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
