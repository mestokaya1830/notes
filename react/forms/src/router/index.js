import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from '../layouts/MasterLayout'
import Home from '../views/Home'
const NotFound = React.lazy(() => import('../views/NotFound'))

function index() {
  const Router = createBrowserRouter([
    {
      path: '/', 
      element: <MasterLayout />,
      errorElement: <React.Suspense fallback="Loading...">
        <NotFound />
      </React.Suspense>,
      children: [
        {
          path:'/',
          element: <Home />
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

export default index
