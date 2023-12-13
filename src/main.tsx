import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Style - Fonts
import 'normalize.css'
import './assets/sass/main.scss'

// Components
// import Profile from './components/profile'
import Header from './components/Header'
import Menu from './components/Menu'

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Menu />
    </>,
    // children: [
    //   {

    //   }
    // ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
