import React, { FC } from 'react'
import { ColLayout, Content, RowLayout, Sider } from './Layout'
import { Navbar } from './Navbar'
import { Button } from './Button'
import { Table, TableColumn } from './Table'
import { ThemeProvider } from './ThemeProvider'
import { ModeProvider } from './ModeProvider'
import { Text } from './Text'

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

const Item: FC<{ icon: string; label: string; count?: number }> = ({ icon, label, count }) => (
  <Text className="py-1.5 flex flex-row items-center hover:translate-x-2 transition-transform ease-in duration-200 dark:hover:text-gray-500">
    <span className="inline-flex items-center justify-center mr-2 text-lg text-gray-400">
      <i className={`bx ${icon}`} />
    </span>
    <span className="text-sm font-medium">{label}</span>
    {count && (
      <span className="ml-auto text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
        {count}
      </span>
    )}
  </Text>
)

export const Email: React.FC = () => {
  return (
    <ThemeProvider>
      <ModeProvider>
        <ColLayout>
          <Navbar />
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
              <Item icon="bxs-star" label="Starred" />
              <Item icon="bxs-chevrons-right" label="Important" />
              <Item icon="bxs-file-blank" label="Drafts" />
              <Item icon="bxs-info-circle" label="Spam" />
              <Item icon="bxs-trash" label="Bin" />
              <Item icon="bxs-send" label="Sent" count={5} />
              <Item icon="bxs-time-five" label="Scheduled" />
              <Item icon="bxs-envelope" label="All Mail" />
              <Item icon="bx-log-out" label="Logout" />
            </Sider>
            <Content>
              <Table className="w-full" striped hoverable columns={columns} data={data} />
            </Content>
          </RowLayout>
        </ColLayout>
      </ModeProvider>
    </ThemeProvider>
  )
}
