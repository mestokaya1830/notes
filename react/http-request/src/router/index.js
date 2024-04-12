import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '../views/Home'
import { getUsers } from '../views/Users'
import MasterLayout from '../layouts/MasterLayout'

const Users = React.lazy(() => import('../views/Users'))
const NotFound = React.lazy(() => import('../views/NotFound'))


function index() {
  const Router =  createBrowserRouter([
    {
      path: '/',
      element: <MasterLayout />,
      errorElement:
      <React.Suspense fallback="Loading...">
        <NotFound />
      </React.Suspense>,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "users",
          element:
          <React.Suspense fallback="Loading...">
            <Users />
          </React.Suspense>,
          loader: getUsers
        },
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
