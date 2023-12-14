import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Style - Fonts
import 'normalize.css'
import './main.scss'

// Components
// import Profile from './components/profile'
import Header from './layout/Header'
import Menu from './layout/Menu'
import Profile from './page/Profile'

const router = createBrowserRouter([
  {
    path: '/app',
    element: <>
      <Header />
      <Menu />
    </>,
    children: [
      {
        path: 'profil',
        // element: <div style={{marginLeft: '100px'}}>Test</div>
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
