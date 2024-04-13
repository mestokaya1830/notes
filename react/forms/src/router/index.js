import React from 'react'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import MasterLayout from '../layouts/MasterLayout'
import Home from '../views/Home'
import { loginFunction } from '../views/Login'

const Login = React.lazy(() => import('../views/Login'))
const NotFound = React.lazy(() => import('../views/NotFound'))

function index() {
  //json format
  // const Router  = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <MasterLayout />,
  //     errorElement: <React.Suspense fallback="Loading...">
  //     <NotFound />
  //     </React.Suspense>,
  //     children: [
  //       {
  //         path: '/',
  //         element: <Home />
  //       },
  //       {
  //         path: 'login',
  //         element: <React.Suspense fallback="Loading...">
  //           <Login />
  //         </React.Suspense>,
  //         action: loginFunction
  //       }
  //     ]
  //   }
  // ])
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MasterLayout />}>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='login' element={<React.Suspense  fallback="Loading...">
          <Login />
        </React.Suspense>}
        action={loginFunction}
      />
      <Route path='*' element={<React.Suspense  fallback="Loading...">
          <NotFound />
        </React.Suspense>}
      />
    </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={Router}/>
    </div>
  )
}

export default index
