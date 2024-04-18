import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from '../layouts/MasterLayout'
import Home from '../views/Home'
import { getUsers }  from '../views/Users'

const About = React.lazy(() => import('../views/About'))
const Contact = React.lazy(() => import('../views/Contact'))
const Users = React.lazy(() => import('../views/Users'))
const Profile = React.lazy(() => import('../views/Profile'))
const NotFound = React.lazy(() => import('../views/NotFound'))
function index() {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <MasterLayout />,
      errorElement: <NotFound />,
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
          path: 'users',
          element: <React.Suspense fallback="Loading...">
            <Users />
          </React.Suspense>,
          loader: getUsers
        },
        {
          path: 'users/:id',
          element: <React.Suspense fallback="Loading...">
            <Profile />
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
