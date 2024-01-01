import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Style - Fonts
import 'normalize.css'
import './main.scss'

// Layout component
import Header from './layout/Header'
import Menu from './layout/Menu'

// Page component
import Interface from './page/Interface'
import Profile from './page/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Interface />
  },
  {
    path: '/app',
    element: <>
      <Header />
      <Menu />
    </>,
    children: [
      {
        path: 'profil/:userId',
        element: <Profile />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
