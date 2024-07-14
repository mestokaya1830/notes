import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


//layouts
import ClientLayout from '../layouts/clientLayout'
import ServerLayout from '../layouts/serverLayout'

//index pages
import Home from '../client/index'
import Dashboard from '../server/index'

//client layz loadig
const About  = React.lazy(() => import('../client/about'))
const Contact  = React.lazy(() => import('../client/contact'))

//server layz loadig
const Users  = React.lazy(() => import('../server/users'))
const Settings  = React.lazy(() => import('../server/settings'))


export default function index() {
  const Router = createBrowserRouter([
    {
      path: '/',
      name: 'client',
      element: <ClientLayout />,
      children:[
        {
          path: '/',
          name: 'home',
          element: <Home />
        },
        {
          path: '/about',
          name: 'about',
          element: <React.Suspense fallback="Loading..."><About /></React.Suspense>
        },
        {
          path: '/contact',
          name: 'contact',
          element: <React.Suspense fallback="Loading..."><Contact /></React.Suspense>
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      element: <ServerLayout />,
      children: [
        {
          path: '/admin',
          name: 'dashboard',
          element: <Dashboard />
        },
        {
          path: 'users',
          name: 'users',
          element: <React.Suspense fallback="Loading..."><Users /></React.Suspense>
        },
        {
          path: 'settings',
          name: 'settings',
          element: <React.Suspense fallback="Loading..."><Settings /></React.Suspense>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}
