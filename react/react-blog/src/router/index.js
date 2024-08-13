import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//layout
import DefaultLayout from '../layouts/default.js'

//client and commans
import Home from '../views/client/index.js'
const Posts  =  React.lazy(() => import('../views/client/user-posts.js'))
const Details  =  React.lazy(() => import('../views/client/details.js'))
const About  =  React.lazy(() => import('../views/client/about.js'))
const Contact  =  React.lazy(() => import('../views/client/contact.js'))
const NotFound  =  React.lazy(() => import('../views/client/notfound.js'))

//auth
const Register  =  React.lazy(() => import('../views/auth/register.js'))
const Login  =  React.lazy(() => import('../views/auth/login.js'))
const EmailVerfication  =  React.lazy(() => import('../views/auth/email-verfication.js'))
const ResetPassword  =  React.lazy(() => import('../views/auth/reset-password.js'))


export default function index() {

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
          path: '/users/:id',
          element: <React.Suspense fallback="Loading..."><Posts /></React.Suspense>
        },
        {
          path: '/user/:id/details',
          element: <React.Suspense fallback="Loading..."><Details /></React.Suspense>
        },
        {
          path: '/about',
          element: <React.Suspense fallback="Loading..."><About /></React.Suspense>
        },
        {
          path: '/contact',
          element: <React.Suspense fallback="Loading..."><Contact /></React.Suspense>
        },
        {
          path: '*',
          element: <React.Suspense fallback="Loading..."><NotFound /></React.Suspense>
        },
        {
          path: '/register',
          element: <React.Suspense fallback="Loading..."><Register /></React.Suspense>
        },
        {
          path: '/login',
          element: <React.Suspense fallback="Loading..."><Login /></React.Suspense>
        },
        {
          path: '/email-verfication',
          element: <React.Suspense fallback="Loading..."><EmailVerfication /></React.Suspense>
        },
        {
          path: '/reset-password',
          element: <React.Suspense fallback="Loading..."><ResetPassword /></React.Suspense>
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
