import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from '../layouts/defaut.jsx'
import Home from '../views/index.jsx'

const Inline = React.lazy(() => import('../views/inline.jsx'))
const Method = React.lazy(() => import('../views/method.jsx'))
const RestMethod = React.lazy(() => import('../views/restmethod.jsx'))
const Notfound = React.lazy(() => import('../views/notfound.jsx'))

export default function Index() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children:[
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/inline',
          element: <React.Suspense fallback="Loading..."><Inline /></React.Suspense>
        },
        {
          path: '/method',
          element: <React.Suspense fallback="Loading..."><Method /></React.Suspense>
        },
        {
          path: '/rest-method',
          element: <React.Suspense fallback="Loading..."><RestMethod /></React.Suspense>
        }
      ]
    },
    {
      path:'*',
      element: <React.Suspense fallback="Loading..."><Notfound /></React.Suspense>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
