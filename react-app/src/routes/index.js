import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Master from '../layouts/Master'
import Home from '../views/Home'

const Admin  = React.lazy(() => import('../views/Admin'))
const UseState  = React.lazy(() => import('../views/UseState'))
const UseEffect  = React.lazy(() => import('../views/UseEffect'))
const NotFound  = React.lazy(() => import('../views/NotFound'))

function index() {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <Master />,
      errorElement: <React.Suspense fallback="Loading"><NotFound /></React.Suspense>,
      children: [
        {
          index,
          element: <Home />
        },
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'admin',
          element: <React.Suspense fallback="Loading"><Admin /></React.Suspense>
        },
        {
          path: 'usestate',
          element: <React.Suspense fallback="Loading"><UseState /></React.Suspense>
        },
        {
          path: 'useeffect',
          element: <React.Suspense fallback="Loading"><UseEffect /></React.Suspense>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default index
