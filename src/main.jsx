import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Product from './pages/Product'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/product',
    element: <Product />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
