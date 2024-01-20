import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './globals/theme'
import { LanguageProvider } from './globals/languages'
import { Root } from './root'
import { Home } from './pages/home'
import { Works } from './pages/works'
import { Project } from './pages/project'
import { About } from './pages/about'
import './css/variables.css'
import './css/reset.css'
import './css/layouts.css'
import './css/components.css'
import './css/responsive.css'
import { ErrorPage } from './pages/errorPage'
import { Error } from './components/error'

const router = createBrowserRouter([
  {
    path: '/my-portfolio',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <Error />,
        children: [
          { index: true, element: <Home /> },
          {
            path: '/my-portfolio/works',
            element: <Works />,
          },
          { path: '/my-portfolio/about', element: <About /> },
          {
            path: '/my-portfolio/works/projet/:id',
            element: <Project />,
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
)
