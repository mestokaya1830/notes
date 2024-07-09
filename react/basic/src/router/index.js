import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//layouts
import ClientLayout from '../views/layouts/client-layout.js'
import AdminLayout from '../views/layouts/admin-layout.js'

//client
import Home from '../views/client/home.js'
const CompProps = React.lazy(() => import('../views/client/props.js'))
const List = React.lazy(() => import('../views/client/list.js'))

//admin
const Dashboard = React.lazy(() => import('../views/admin/index.js'))

//general
const NotFound = React.lazy(() => import('../views/notfound.js'))

export default function index() {
  const Router = createBrowserRouter([
    {
      path: '/',
      name: 'home',
      element: <ClientLayout />,
      children: [
        {
          path: '/',
          name: 'home',
          element: <React.Suspense fallback="Loading..."><Home /></React.Suspense>
        },
        {
          path: '/props',
          name: 'props',
          element: <React.Suspense fallback="Loading..."><CompProps /></React.Suspense>
        },
        {
          path: '/list',
          name: 'list',
          element: <React.Suspense fallback="Loading..."><List /></React.Suspense>
        },
      ]
    },
    {
      path: '/admin',
      name: 'name',
      element: <AdminLayout />,
      children: [
        {
          path: '/admin',
          name:'dashboard',
          element: <React.Suspense fallback="Loading..."><Dashboard /></React.Suspense>
        }
      ]
    },
    {
      path: '*',
      name: 'notfond',
      element: <React.Suspense fallback="Loading..."><NotFound /></React.Suspense>
    }
  ])
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}
