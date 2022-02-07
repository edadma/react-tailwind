import { FC } from 'react'
import { Button } from './Button'
import { ModeProvider, notify } from './index'

export const ToastDemo: FC = () => {
  return (
    <ModeProvider>
      <Button
        onClick={() =>
          notify({
            type: 'warning',
            message: 'asdf',
            description: 'asdfasdf dsa df df fd fdas df dfs fdsa fsda fsda afsd da as fsdea',
          })
        }
      >
        Make me a toast
      </Button>
    </ModeProvider>
  )
}
