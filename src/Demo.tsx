import React, { useState } from 'react'
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
  Center,
  Between,
  Table,
  Pagination,
} from './index'
import { ThemeProvider } from './ThemeProvider'
import { DefaultTheme } from './themes/DefaultTheme'
import { CB3Theme } from './themes/CB3Theme'
import { ThemeSwitcher } from './ThemeSwitcher'
import { Home } from './Icons'
import * as yup from 'yup'

const data = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '20 Downing Street',
  },
]

const columns = [
  {
    title: 'Name',
    index: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    index: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    index: 'address',
    key: 'address',
  },
]

export const Demo: React.FC = () => {
  const [form1, setForm1] = useState()
  const [form2, setForm2] = useState()
  const [form3, setForm3] = useState()
  const [form4, setForm4] = useState()

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
          <Grid cols={4}>
            <Table striped hoverable columns={columns} data={data} />
            <Table columns={columns} data={data} />
          </Grid>
        </Card>
        <Card>
          <Grid cols={5}>
            <Pagination current={2} pageSize={10} total={107} />
          </Grid>
        </Card>
        <Card>
          <Grid cols={4}>
            <Elem className="max-w-sm">
              <Text italic className="mb-10">
                Simple form with no password strength checking and default styling on the inputs
                except for full width.
              </Text>
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
                  onSubmit: setForm1,
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
                <Between>
                  <Checkbox name="remember">Remember me</Checkbox>
                  <Link href="#" role="info">
                    Forgot password?
                  </Link>
                </Between>
                <Center>
                  <Button type="submit">Login</Button>
                </Center>
              </Form>
              <Card className="mt-5">
                <Text className="mb-2">Form values:</Text>
                <pre className="text-white">
                  {form1 ? JSON.stringify(form1, null, 2) : 'not submitted'}
                </pre>
              </Card>
            </Elem>
            <Elem className="max-w-sm">
              <Text italic className="mb-10">
                Form with strong password strength checking and extra styling on the inputs.
              </Text>
              <Form
                init={{
                  initialValues: { email: '', password: '', passwordConfirm: '', agree: false },
                  validationSchema: yup.object({
                    email: yup
                      .string()
                      .required('Email is required.')
                      .email('Must be a valid email.'),
                    password: yup
                      .string()
                      .required('Password is required.')
                      .min(8, 'Password must be at least 8 characters.')
                      .matches(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^0-9a-zA-Z])/,
                        'Password must contain at least: one uppercase, one lowercase, one number, and one special character'
                      ),
                    passwordConfirm: yup
                      .string()
                      .required('Confirmed password is required.')
                      .min(8, 'Confirmed password must be at least 8 characters.')
                      .matches(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^0-9a-zA-Z])/,
                        'Confirmed password must contain at least: one uppercase, one lowercase, one number, and one special character'
                      )
                      .oneOf([yup.ref('password')], 'Passwords do not match'),
                  }),
                  onSubmit: setForm2,
                }}
              >
                <Input
                  name="email"
                  label="Your email"
                  placeholder="name@company.com"
                  pill
                  role="info"
                  className="w-full"
                />
                <Input
                  type="password"
                  name="password"
                  label="Your desired password"
                  placeholder="••••••••"
                  pill
                  role="info"
                  className="w-full"
                />
                <Input
                  type="password"
                  name="passwordConfirm"
                  label="Confirm your password"
                  placeholder="••••••••"
                  pill
                  role="info"
                  className="w-full"
                />
                <Checkbox name="agree" role="info">
                  <Text>I agree to the</Text>&nbsp;
                  <Link href="#">terms and conditions</Link>
                </Checkbox>
                <Button type="submit" role="info" pill className="w-full">
                  Register
                </Button>
              </Form>
              <Card className="mt-5">
                <Text className="mb-2">Form values:</Text>
                <pre className="text-white">
                  {form2 ? JSON.stringify(form2, null, 2) : 'not submitted'}
                </pre>
              </Card>
            </Elem>
            <Elem className="max-w-sm">
              <Text italic className="mb-10">
                Form with strong password strength checking and extra styling on the inputs.
              </Text>
              <Form
                init={{
                  initialValues: { email: '', password: '', passwordConfirm: '', agree: false },
                  validationSchema: yup.object({
                    email: yup
                      .string()
                      .required('Email is required.')
                      .email('Must be a valid email.'),
                    password: yup
                      .string()
                      .required('Password is required.')
                      .min(8, 'Password must be at least 8 characters.')
                      .matches(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^0-9a-zA-Z])/,
                        'Password must contain at least: one uppercase, one lowercase, one number, and one special character'
                      ),
                    passwordConfirm: yup
                      .string()
                      .required('Confirmed password is required.')
                      .min(8, 'Confirmed password must be at least 8 characters.')
                      .matches(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^0-9a-zA-Z])/,
                        'Confirmed password must contain at least: one uppercase, one lowercase, one number, and one special character'
                      )
                      .oneOf([yup.ref('password')], 'Passwords do not match'),
                  }),
                  onSubmit: setForm3,
                }}
              >
                <Input
                  name="email"
                  label="Your email"
                  placeholder="name@company.com"
                  pill
                  role="info"
                  className="w-full"
                />
                <Input
                  type="password"
                  name="password"
                  label="Your desired password"
                  placeholder="••••••••"
                  pill
                  role="info"
                  className="w-full"
                />
                <Input
                  type="password"
                  name="passwordConfirm"
                  label="Confirm your password"
                  placeholder="••••••••"
                  pill
                  role="info"
                  className="w-full"
                />
                <Checkbox name="agree">
                  <Text>I agree to the</Text>&nbsp;
                  <Link href="#">terms and conditions</Link>
                </Checkbox>
                <Button type="submit" role="info" pill className="w-full">
                  Login
                </Button>
              </Form>
              <Card className="mt-5">
                <Text className="mb-2">Form values:</Text>
                <pre className="text-white">
                  {form3 ? JSON.stringify(form3, null, 2) : 'not submitted'}
                </pre>
              </Card>
            </Elem>
            <Elem className="max-w-sm">
              <Text italic className="mb-10">
                Form with strong password strength checking and extra styling on the inputs.
              </Text>
              <Form
                init={{
                  initialValues: { email: '', password: '', passwordConfirm: '', agree: false },
                  validationSchema: yup.object({
                    email: yup
                      .string()
                      .required('Email is required.')
                      .email('Must be a valid email.'),
                    password: yup
                      .string()
                      .required('Password is required.')
                      .min(8, 'Password must be at least 8 characters.')
                      .matches(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^0-9a-zA-Z])/,
                        'Password must contain at least: one uppercase, one lowercase, one number, and one special character'
                      ),
                    passwordConfirm: yup
                      .string()
                      .required('Confirmed password is required.')
                      .min(8, 'Confirmed password must be at least 8 characters.')
                      .matches(
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^0-9a-zA-Z])/,
                        'Confirmed password must contain at least: one uppercase, one lowercase, one number, and one special character'
                      )
                      .oneOf([yup.ref('password')], 'Passwords do not match'),
                  }),
                  onSubmit: setForm4,
                }}
              >
                <Input
                  name="email"
                  label="Your email"
                  placeholder="name@company.com"
                  pill
                  role="info"
                  className="w-full"
                />
                <Input
                  type="password"
                  name="password"
                  label="Your desired password"
                  placeholder="••••••••"
                  pill
                  role="info"
                  className="w-full"
                />
                <Input
                  type="password"
                  name="passwordConfirm"
                  label="Confirm your password"
                  placeholder="••••••••"
                  pill
                  role="info"
                  className="w-full"
                />
                <Checkbox name="agree">
                  <Text>I agree to the</Text>&nbsp;
                  <Link href="#">terms and conditions</Link>
                </Checkbox>
                <Button type="submit" role="info" pill className="w-full">
                  Login
                </Button>
              </Form>
              <Card className="mt-5">
                <Text className="mb-2">Form values:</Text>
                <pre className="text-white">
                  {form4 ? JSON.stringify(form4, null, 2) : 'not submitted'}
                </pre>
              </Card>
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
