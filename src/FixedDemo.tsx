import { FC, useState } from 'react'
import { Button } from './Button'
import { Card, Fixed, ModeProvider, ModeSwitcher, Text } from './index'

export const FixedDemo: FC = () => {
  const [visible, setVisible] = useState(false)

  return (
    <ModeProvider>
      <ModeSwitcher /> <Button onClick={() => setVisible(!visible)}>Make a dialog</Button>
      <Fixed visible={visible} className="bottom-2 right-2 w-[30%]">
        <Card className="">
          <Text>asdf</Text>
        </Card>
      </Fixed>
    </ModeProvider>
  )
}
