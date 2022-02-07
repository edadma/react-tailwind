import React, { FC } from 'react'
import {
  ThemeProvider,
  ModeProvider,
  Card,
  Text,
  Navbar,
  NavLink,
  ColLayout,
  RowLayout,
  Sider,
  ModeSwitcher,
  Content,
  NavLinkItem,
} from './index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const LayoutDemo: FC = () => (
  <ThemeProvider>
    <ModeProvider>
      <BrowserRouter>
        <ColLayout>
          <Navbar>
            <ModeSwitcher />
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </Navbar>
          <RowLayout>
            <Sider>
              <NavLinkItem to="/page1">asdfasdf</NavLinkItem>
              <NavLinkItem to="/page2">asdf</NavLinkItem>
              <NavLinkItem to="/page3">asdf</NavLinkItem>
            </Sider>
            <Content>
              <Routes>
                <Route path="/" element={<Text>/ route</Text>} />
                <Route path="/about" element={<Text>/about route</Text>} />
                <Route path="/page1" element={<Text>/ page1</Text>} />
                <Route path="/page2" element={<Text>/ page2</Text>} />
                <Route path="/page3" element={<Text>/ page3</Text>} />
              </Routes>
            </Content>
          </RowLayout>
        </ColLayout>
      </BrowserRouter>
    </ModeProvider>
  </ThemeProvider>
)
