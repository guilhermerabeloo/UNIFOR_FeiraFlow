import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import App from './App.jsx'
import Home from '../components/Home.jsx'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Navigate to="/home" />
        },
        {
          path: '/home',
          element: <Home />
        },
      ]
    }
  ])

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
  )
