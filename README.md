# Getting Started with `react-tailwind`

Install required packages, and initialize Tailwind CSS:

```shell
npm i @edadma/react-tailwind
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Edit `./src/tailwind.config.js` so that Tailwind CSS will work:

```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@edadma/react-tailwind/dist/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
```

Edit `./src/index.css`, the only 3 lines of CSS you will ever need: 

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Edit `./src/TestApp.tsx` and start using `react-tailwind` to build your app:

```typescript jsx
import { FC } from 'react'
import {
  ThemeProvider,
  Card,
  ModeProvider,
  ModeSwitcher,
  Space,
  Text,
} from '@edadma/react-tailwind'

const App: FC = () => (
  <ThemeProvider>
    <ModeProvider>
      <Card border={false}>
        <Space>
          <ModeSwitcher /> <Text>Hello World!</Text>
        </Space>
      </Card>
    </ModeProvider>
  </ThemeProvider>
)

export default App
```
