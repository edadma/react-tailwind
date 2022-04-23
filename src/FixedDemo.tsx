import React, { FC, useState } from 'react'
import { Button } from './Button'
import { Card, Fixed, Form, ModeProvider, ModeSwitcher, Table, Text, TextArea } from './index'
import { useTheme } from './ThemeProvider'
import * as yup from 'yup'
import { TableColumn } from './Table'

const data = [
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
  {
    read: false,
    subject: 'subject 2',
    body: 'body 2',
  },
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
  {
    read: false,
    subject: 'subject 2',
    body: 'body 2',
  },
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
  {
    read: false,
    subject: 'subject 2',
    body: 'body 2',
  },
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
  {
    read: false,
    subject: 'subject 2',
    body: 'body 2',
  },
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
  {
    read: false,
    subject: 'subject 2',
    body: 'body 2',
  },
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
  {
    read: false,
    subject: 'subject 2',
    body: 'body 2',
  },
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
  {
    read: false,
    subject: 'subject 2',
    body: 'body 2',
  },
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
  {
    read: false,
    subject: 'subject 2',
    body: 'body 2',
  },
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
  {
    read: false,
    subject: 'subject 2',
    body: 'body 2',
  },
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
  {
    read: false,
    subject: 'subject 2',
    body: 'body 2',
  },
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
  {
    read: false,
    subject: 'subject 2',
    body: 'body 2',
  },
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
  {
    read: false,
    subject: 'subject 2',
    body: 'body 2',
  },
  {
    read: true,
    subject: 'subject 1',
    body: 'body 1',
  },
]

const columns: TableColumn[] = [
  {
    title: 'Read',
    index: 'read',
    key: 'read',
    td: 'pl-1 pr-4 w-0',
    render: (data) => (data ? null : <Text>•</Text>),
  },
  {
    title: 'Subject',
    index: 'subject',
    key: 'subject',
    td: 'pl-0 w-2/12',
  },
  {
    title: 'Body',
    index: 'body',
    key: 'body',
    td: 'w-10/12',
  },
]

export const FixedDemo: FC = () => {
  const [visible, setVisible] = useState(false)

  function handleForm() {}

  return (
    <ModeProvider>
      <ModeSwitcher /> <Button onClick={() => setVisible(!visible)}>Make a dialog</Button>
      <Table
        className="w-full"
        thead="flex w-full"
        trHead="flex w-full"
        tbody="w-full overflow-y-auto flex flex-col h-[calc(100vh-88px)]"
        trBody="flex w-full"
        header={false}
        padBody={1}
        color="none"
        rounded={false}
        hoverable
        columns={columns}
        data={data}
      />
      <Fixed visible={visible} className="bottom-2 right-2 w-[30%]">
        <Card className="">
          <Form
            init={{
              initialValues: { message: '' },
              validationSchema: yup.object({
                message: yup.string().required('Message is empty.'),
              }),
              onSubmit: handleForm,
            }}
          >
            <TextArea
              name="message"
              rows={4}
              label="Your message"
              placeholder="Leave a comment..."
              color="primary"
              className="w-full"
            />
            <Button type="submit" color="primary" className="w-full">
              Send
            </Button>
          </Form>
        </Card>
      </Fixed>
    </ModeProvider>
  )
}
