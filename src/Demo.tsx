import React, { FC, useState } from 'react'
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
import { TableColumn } from './Table'

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

const columns: TableColumn[] = [
  {
    title: 'Name',
    index: 'name',
    key: 'name',
    render: (data) => <Text>{data}</Text>,
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

export const Demo: FC = () => {
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
          <Grid cols={5}>
            <Table striped hoverable columns={columns} data={data} />
            <Table columns={columns} data={data} />
            <Table color="info" striped hoverable columns={columns} data={data} />
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
                  <Link href="#" color="info">
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
                  color="info"
                  className="w-full"
                />
                <Input
                  type="password"
                  name="password"
                  label="Your desired password"
                  placeholder="••••••••"
                  pill
                  color="info"
                  className="w-full"
                />
                <Input
                  type="password"
                  name="passwordConfirm"
                  label="Confirm your password"
                  placeholder="••••••••"
                  pill
                  color="info"
                  className="w-full"
                />
                <Checkbox name="agree" color="info">
                  <Text>I agree to the</Text>&nbsp;
                  <Link href="#">terms and conditions</Link>
                </Checkbox>
                <Button type="submit" color="info" pill className="w-full">
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
                  color="info"
                  className="w-full"
                />
                <Input
                  type="password"
                  name="password"
                  label="Your desired password"
                  placeholder="••••••••"
                  pill
                  color="info"
                  className="w-full"
                />
                <Input
                  type="password"
                  name="passwordConfirm"
                  label="Confirm your password"
                  placeholder="••••••••"
                  pill
                  color="info"
                  className="w-full"
                />
                <Checkbox name="agree">
                  <Text>I agree to the</Text>&nbsp;
                  <Link href="#">terms and conditions</Link>
                </Checkbox>
                <Button type="submit" color="info" pill className="w-full">
                  Register
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
                  color="info"
                  className="w-full"
                />
                <Input
                  type="password"
                  name="password"
                  label="Your desired password"
                  placeholder="••••••••"
                  pill
                  color="info"
                  className="w-full"
                />
                <Input
                  type="password"
                  name="passwordConfirm"
                  label="Confirm your password"
                  placeholder="••••••••"
                  pill
                  color="info"
                  className="w-full"
                />
                <Checkbox name="agree">
                  <Text>I agree to the</Text>&nbsp;
                  <Link href="#">terms and conditions</Link>
                </Checkbox>
                <Button type="submit" color="info" pill className="w-full">
                  Register
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
              <Tabs type="tab" color="regular">
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
              <Tabs type="tab" color="info">
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
              <Tabs type="tab" color="success">
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
              <Tabs type="tab" color="warning">
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
              <Tabs type="tab" color="error">
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
              <Tabs type="underline" color="regular">
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
              <Tabs type="underline" color="info">
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
              <Tabs type="underline" color="success">
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
              <Tabs type="underline" color="warning">
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
              <Tabs type="underline" color="error">
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
              <Tabs type="pill" color="regular">
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
              <Tabs type="pill" color="info">
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
              <Tabs type="pill" color="success">
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
              <Tabs type="pill" color="warning">
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
              <Tabs type="pill" color="error">
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
            <Button color="info">info</Button>
            <Button color="success">success</Button>
            <Button color="warning">warning</Button>
            <Button color="error">error</Button>
            <Button outlined>regular</Button>
            <Button outlined color="info">
              info
            </Button>
            <Button outlined color="success">
              success
            </Button>
            <Button outlined color="warning">
              warning
            </Button>
            <Button outlined color="error">
              error
            </Button>
          </Grid>
        </Card>
        <Card>
          <Grid cols={5}>
            <Progress value={45} />
            <Progress color="info" value={45} />
            <Progress color="success" value={45} />
            <Progress color="warning" value={45} />
            <Progress color="error" value={45} />
            <Progress label value={45} />
            <Progress label color="info" value={45} />
            <Progress label color="success" value={45} />
            <Progress label color="warning" value={45} />
            <Progress label color="error" value={45} />
          </Grid>
        </Card>
        <Card>
          <Grid cols={5}>
            <Alert>This is an alert.</Alert>
            <Alert color="info">This is an alert.</Alert>
            <Alert color="success">This is an alert.</Alert>
            <Alert color="warning">This is an alert.</Alert>
            <Alert color="error">This is an alert.</Alert>
          </Grid>
        </Card>
        <Card>
          <Grid cols={5}>
            <Spinner />
            <Spinner color="info" />
            <Spinner color="success" />
            <Spinner color="warning" />
            <Spinner color="error" />
          </Grid>
        </Card>
        <Card>
          <Grid cols={5}>
            <Elem>
              <Badge>Badge</Badge>
            </Elem>
            <Elem>
              <Badge color="info">Badge</Badge>
            </Elem>
            <Elem>
              <Badge color="success">Badge</Badge>
            </Elem>
            <Elem>
              <Badge color="warning">Badge</Badge>
            </Elem>
            <Elem>
              <Badge color="error">Badge</Badge>
            </Elem>
            <Elem>
              <Badge border>Badge</Badge>
            </Elem>
            <Elem>
              <Badge border color="info">
                Badge
              </Badge>
            </Elem>
            <Elem>
              <Badge border color="success">
                Badge
              </Badge>
            </Elem>
            <Elem>
              <Badge border color="warning">
                Badge
              </Badge>
            </Elem>
            <Elem>
              <Badge border color="error">
                Badge
              </Badge>
            </Elem>
          </Grid>
        </Card>
      </ModeProvider>
    </ThemeProvider>
  )
}
