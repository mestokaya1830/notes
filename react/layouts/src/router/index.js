import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from '../views/layouts/layout.js'
import Home from '../views/clients/home.js'
const About = React.lazy(() => import('../views/clients/about.js'))
const Contact = React.lazy(() => import('../views/clients/contact.js'))
const NotFound = React.lazy(() => import('../views/notfound.js'))

export default function index() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout />,
      children:[
        {
          path:'/',
          element: <Home />,
        },
        {
          path:'/about',
          element: <React.Suspense fallback="Loading.."><About/></React.Suspense>,
        },
        {
          path:'/contact',
          element: <React.Suspense fallback="Loading.."><Contact/></React.Suspense>,
        },
        {
          path:'*',
          element: <React.Suspense fallback="Loading.."><NotFound/></React.Suspense>,
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
