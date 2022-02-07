import React, { FC } from 'react'
import { ColLayout, Content, RowLayout, Sider } from './Layout'
import { Navbar } from './Navbar'
import { Button } from './Button'
import { Table, TableColumn } from './Table'
import { ThemeProvider } from './ThemeProvider'
import { ModeProvider } from './ModeProvider'
import { Text } from './Text'
import { NavLink } from './NavLink'

const data = [
  {
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    name: 'John',
    age: 42,
    address: '20 Downing Street',
  },
  {
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    name: 'John',
    age: 42,
    address: '20 Downing Street',
  },
  {
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    name: 'John',
    age: 42,
    address: '20 Downing Street',
  },
  {
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    name: 'John',
    age: 42,
    address: '20 Downing Street',
  },
  {
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    name: 'John',
    age: 42,
    address: '20 Downing Street',
  },
  {
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    name: 'John',
    age: 42,
    address: '20 Downing Street',
  },
  {
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    name: 'John',
    age: 42,
    address: '20 Downing Street',
  },
  {
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    name: 'John',
    age: 42,
    address: '20 Downing Street',
  },
  {
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
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
    th: 'w-0',
    td: 'w-0',
  },
  {
    title: 'Age',
    index: 'age',
    key: 'age',
    th: 'w-1/3',
    td: 'w-1/3',
  },
  {
    title: 'Address',
    index: 'address',
    key: 'address',
    th: 'w-1/3',
    td: 'w-1/3',
  },
]

const Item: FC<{ icon: string; label: string; count?: number }> = ({ icon, label, count }) => (
  <Text className="py-1.5 flex flex-row items-center hover:translate-x-2 transition-transform ease-in duration-200 dark:hover:text-gray-500">
    <span className="inline-flex items-center justify-center mr-2 text-lg text-gray-400">
      <i className={`bx ${icon}`} />
    </span>
    <span className="text-sm font-medium">{label}</span>
    {count && (
      <span className="ml-auto text-sm bg-neutral-700 rounded-full px-2 py-0.5 text-neutral-300">
        {count}
      </span>
    )}
  </Text>
)

export const EmailDemo: React.FC = () => {
  return (
    <ThemeProvider>
      <ModeProvider>
        <ColLayout>
          <Navbar>
            <Text>Home</Text>
          </Navbar>
          <RowLayout>
            <Sider width={56}>
              <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

              <Button pill className="flex mb-2 w-36">
                <span className="inline-flex items-center mr-2 text-2xl">
                  <i className="bx bx-plus" />
                </span>
                Compose
              </Button>
              <Item icon="bxs-inbox" label="Inbox" />
              <Item icon="bx-mail-send" label="Unread" />
              <Item icon="bxs-star" label="Starred" />
              <Item icon="bxs-file-blank" label="Drafts" />
              <Item icon="bx-block" label="Spam" />
              <Item icon="bxs-trash" label="Trash" />
              <Item icon="bxs-send" label="Sent" count={5} />
              <Item icon="bxs-envelope" label="All Mail" />
              <Item icon="bx-log-out" label="Logout" />
            </Sider>
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
          </RowLayout>
        </ColLayout>
      </ModeProvider>
    </ThemeProvider>
  )
}
