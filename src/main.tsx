import React from 'react'
import ReactDOM from 'react-dom/client'
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
  {
    path: '/',
    element: <Interface />,
    errorElement: <>Hello main route</>
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
    ],
    errorElement: <>
      <Header />
      <Menu />
      <Error />
    </>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
