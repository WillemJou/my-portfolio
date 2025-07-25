import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './globals/Theme'
import { LanguageProvider } from './globals/Languages'
import { Root } from './root'
import { Home } from './pages/Home'
import { Works } from './pages/Works'
import { Project } from './pages/Project'
import { About } from './pages/About'
import './css/variables.css'
import './css/reset.css'
import './css/layouts.css'
import './css/components.css'
import './css/responsive.css'
import { ErrorPage } from './pages/ErrorPage'
import { Error } from './components/Error'

const router = createBrowserRouter([
  {
    path: '/my-portfolio/',
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
