import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../views/Home'
const About = React.lazy(() => import('../views/About'))
const Contact = React.lazy(() => import('../views/Contact'))
const Admin = React.lazy(() => import('../views/Admin'))
const Users = React.lazy(() => import('../views/admin/Users'))
const Settings = React.lazy(() => import('../views/admin/Settings'))
const NotFound = React.lazy(() => import('../views/NotFound'))

function index() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={
        <React.Suspense fallback="Loading...">
          <About />
        </React.Suspense>
      } />
      <Route path='/contact' element={
        <React.Suspense fallback="Loading...">
          <Contact />
        </React.Suspense>
      } />
      <Route path='/admin' element={
        <React.Suspense fallback="Loading...">
         <Admin />
        </React.Suspense>
      } >
         <Route index element={
            <React.Suspense fallback="Loading...">
              <Users />
            </React.Suspense>
          } />
          <Route path="users" element={
            <React.Suspense fallback="Loading...">
              <Users />
            </React.Suspense>
          } />
          <Route path="settings" element={
            <React.Suspense fallback="Loading...">
              <Settings />
            </React.Suspense>
          } />
      </Route>
      <Route path='*' element={
        <React.Suspense fallback="Loading...">
          <NotFound />
        </React.Suspense>
      } />
    </Routes>
  )
}

export default index
