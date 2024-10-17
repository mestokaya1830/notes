import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//client
import DefaultLayout from '../layouts/default.jsx'
import Home from '../views/client/index.jsx'


//global
const NotFound  = React.lazy(() => import('../views/not-found.jsx'))

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
      ]
    },
    
    {
      path:'*',
      element: <React.Suspense fallback="Loading..."><NotFound /></React.Suspense>
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
