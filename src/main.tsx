import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './features/theme'
import { Root } from './root'
import { Home } from './pages/home'
import { Works } from './pages/works'
import { About } from './pages/about'
import './global-css/global.css'
import './global-css/reset.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'works', element: <Works /> },
      { path: 'about', element: <About /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
