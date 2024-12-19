import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from '../layouts/default.jsx'
import Home from '../views/index.jsx'

const Notfound = React.lazy(() => import('../views/notfound.jsx'))

export default function Index() {
  const router = createBrowserRouter([
    {
      path: '/', 
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    },
    {
      path: '*',
      element: <React.Suspense fallback="Loading..."><Notfound /></React.Suspense>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
