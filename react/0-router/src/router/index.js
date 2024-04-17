import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from '../layouts/MasterLayout'
import Home from '../views/Home'

const About = React.lazy(() => import('../views/About'))
const Contact = React.lazy(() => import('../views/Contact'))
const Admin = React.lazy(() => import('../views/Admin'))
const Users = React.lazy(() => import('../views/admin/Users'))
const Settings = React.lazy(() => import('../views/admin/Settings'))
const NotFound = React.lazy(() => import('../views/NotFound'))

function index() {
  const Router = createBrowserRouter([
    {
      path:'/',
      element: <MasterLayout />,
      errorElement: <React.Suspense fallback="Loading...">
        <NotFound />
      </React.Suspense>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'about',
          element: <React.Suspense fallback="Loading...">
            <About />
          </React.Suspense>
        },
        {
          path: 'contact',
          element: <React.Suspense fallback="Loading...">
            <Contact />
          </React.Suspense>
        },
        {
          path: 'admin',
          element: <React.Suspense fallback="Loading...">
            <Admin />
          </React.Suspense>,
          children: [
            {
              index,
              element: <React.Suspense fallback="Loading...">
                <Users />
              </React.Suspense>
            },
            {
              path: 'admin',
              element: <React.Suspense fallback="Loading...">
                <Users />
              </React.Suspense>
            },
            {
              path: 'settings',
              element: <React.Suspense fallback="Loading...">
                <Settings />
              </React.Suspense>
            },
          ]
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
