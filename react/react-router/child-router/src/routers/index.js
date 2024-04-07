import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../views/Home'
const Login = React.lazy(() => import('../views/Login'))
const Register = React.lazy(() => import('../views/Register'))
const Admin = React.lazy(() => import('../views/Admin'))
const Users = React.lazy(() => import('../views/dashboard/Users'))
const Settings = React.lazy(() => import('../views/dashboard/Settings'))
const NotFound = React.lazy(() => import('../views/NotFound'))

function index() {
  return (
   <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route
          path='/login' element={
          <React.Suspense fallback="Loading...">
            <Login />
          </React.Suspense>
          }
      />
      <Route
          path='/register' element={
          <React.Suspense fallback="Loading...">
            <Register />
          </React.Suspense>
          }
      />
      <Route path='/admin' element={<React.Suspense fallback="Loading..."><Admin /></React.Suspense>}>
          <Route index element={
            <React.Suspense fallback="Loading...">
              <Users />
            </React.Suspense>}>
          </Route>
          <Route path='users' element={
            <React.Suspense fallback="Loading...">
              <Users />
            </React.Suspense>}>
          </Route>
          <Route path='settings' element={
            <React.Suspense fallback="Loading...">
              <Settings />
            </React.Suspense>}>
          </Route>
      </Route>
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
