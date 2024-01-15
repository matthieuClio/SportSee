// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// React router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Style - Fonts
import 'normalize.css'
import './main.scss'

// Layout component
import Header from './layout/Header'
import Menu from './layout/Menu'

// Page components
import Interface from './page/Interface'
import Profile from './page/Profile'
import Error from './page/Error'


const router = createBrowserRouter([
  // Main route
  {
    path: '/',
    element: <Interface />,
    errorElement: <>
      <Header />
      <Error />
    </>
  },

  // Application route
  {
    path: '/app',
    // Outlet define in end of Menu
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
  },

  // Error page
  {
    path: '/error',
    element: <>
      <Header />
      <Error />
    </>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
