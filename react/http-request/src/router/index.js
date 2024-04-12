import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import Home from '../views/Home'
import { getUsers } from '../views/Users'
import MasterLayout from '../layouts/MasterLayout'

const Users = React.lazy(() => import('../views/Users'))
const NotFound = React.lazy(() => import('../views/NotFound'))


function index() {
  const Router =  createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MasterLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="users" 
          element={
            <React.Suspense fallback="Loading...">
              <Users />
            </React.Suspense>
          }
          loader={getUsers}
        />
        <Route path="*" element={
          <React.Suspense fallback="Loading...">
            <NotFound />
          </React.Suspense>
        } />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}

export default index
