import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Root } from './route'
import './global-css/global.css'
import './global-css/reset.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
