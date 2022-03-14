import { FC } from 'react'
import { Button } from './Button'
import { ModeProvider, ModeSwitcher, notify, ThemeProvider } from './index'

export const NotifyDemo: FC = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  )
}
