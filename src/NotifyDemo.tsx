import { FC } from 'react'
import { Button } from './Button'
import { ModeProvider, notify } from './index'

export const NotifyDemo: FC = () => {
  return (
    <ModeProvider>
      <Button
        onClick={() =>
          notify({
            type: 'success',
            message: 'Title',
            description: 'Description blah blah blah blah blah blah blah blah blah',
          })
        }
      >
        Make me a toast
      </Button>
    </ModeProvider>
  )
}
