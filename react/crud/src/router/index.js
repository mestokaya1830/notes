import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from '../layouts/MasterLayout.js'
import Home from '../views/Home.js'

const NotFound = React.lazy(() => import('../views/NotFound.js'))
const Admin = React.lazy(() => import('../views/Admin.js'))
const Edit = React.lazy(() => import('../views/Edit.js'))
const AddUser = React.lazy(() => import('../views/AddUser.js'))

function index() {
  const Router= createBrowserRouter([
    {
      path: '/',
      element: <MasterLayout />,
      errorElement: <React.Suspense fallback="Loading... ">
        <NotFound />
      </React.Suspense>,
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
          element: <React.Suspense fallback="Loading...">
            <Admin />
          </React.Suspense>
        },
        {
          path: 'admin/users/:id',
          element: <React.Suspense fallback="Loading...">
            <Edit />
          </React.Suspense>
        },
        {
          path: 'admin/adduser',
          element: <React.Suspense fallback="Loading...">
            <AddUser />
          </React.Suspense>
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
