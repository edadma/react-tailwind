import { FC } from 'react'
import { Button } from './Button'
import { ModeProvider, ModeSwitcher, notify } from './index'

export const NotifyDemo: FC = () => {
  return (
    <ModeProvider>
      <ModeSwitcher />{' '}
      <Button
        onClick={() =>
          notify({
            type: 'success',
            title: 'Title',
            description: 'Description blah blah blah blah blah blah blah blah blah',
          })
        }
      >
        Make me a toast
      </Button>
    </ModeProvider>
  )
}
