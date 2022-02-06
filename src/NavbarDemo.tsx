import React, { FC } from 'react'
import {
  ThemeProvider,
  ModeProvider,
  Card,
  Text,
  Navbar,
  ColLayout,
  Content,
  RowLayout,
  Sider,
} from './index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const NavbarDemo: FC = () => (
  <ThemeProvider>
    <ModeProvider>
      <BrowserRouter>
        <ColLayout>
          <Navbar />

          <Card>
            <Routes>
              <Route path="/" element={<Text>/ route</Text>} />
              <Route path="/about" element={<Text>/about route</Text>} />
            </Routes>
          </Card>
        </ColLayout>
      </BrowserRouter>
    </ModeProvider>
  </ThemeProvider>
)
