import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import DefaultLayout from '../layouts/default.jsx'
import Home from '../views/index.jsx'

const About = React.lazy(() => import('../views/about.jsx'))
const InpuSingle = React.lazy(() => import('../views/inputSingle.jsx'))
const InputMultiple = React.lazy(() => import('../views/inputMultiple.jsx'))
const Submit = React.lazy(() => import('../views/submit.jsx'))
const NotFound = React.lazy(() => import('../views/notfound.jsx'))
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
          path:"/about",
          element: <React.Suspense fallback="Loading..."><About /></React.Suspense>
        },
        {
          path:"/input-single",
          element: <React.Suspense fallback="Loading..."><InpuSingle /></React.Suspense>
        },
        {
          path:"/input-multiple",
          element: <React.Suspense fallback="Loading..."><InputMultiple /></React.Suspense>
        },
        {
          path:"/submit",
          element: <React.Suspense fallback="Loading..."><Submit /></React.Suspense>
        },
        {
          path:"*",
          element: <React.Suspense fallback="Loading..."><NotFound /></React.Suspense>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
