import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../views/Home'
const Users = React.lazy(() => import('../views/Users'))
const Profile = React.lazy(() => import('../views/Profile'))
const NotFound = React.lazy(() => import('../views/NotFound'))

function index() {
  return (
   <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route
          path='/users' element={
          <React.Suspense fallback="Loading...">
            <Users />
          </React.Suspense>
          }
      />
      <Route
          path='/users/:id' element={
          <React.Suspense fallback="Loading...">
            <Profile />
          </React.Suspense>
          }
      />
      <Route
          path='*' element={
          <React.Suspense fallback="Loading...">
            <NotFound />
          </React.Suspense>
          }
      />
   </Routes>
  )
}

export default index
