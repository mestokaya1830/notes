import React from 'react'
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import MasterLayout from '../layouts/MasterLayout'
import Home from '../views/Home'

const About = React.lazy(() => import('../views/About'))
const Contact = React.lazy(() => import('../views/Contact'))
const Admin = React.lazy(() => import('../views/Admin'))
const Users = React.lazy(() => import('../views/admin/Users'))
const Settings = React.lazy(() => import('../views/admin/Settings'))
const Profile = React.lazy(() => import('../views/admin/Profile'))
const NotFound = React.lazy(() => import('../views/NotFound'))

function index() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MasterLayout />}>
        <Route path='/' element={<Home />}/>
        <Route path="about" element={<React.Suspense fallback="Loading...">
          <About />
        </React.Suspense>}/>
        <Route path="contact" element={<React.Suspense fallback="Loading...">
          <Contact />
        </React.Suspense>}/>
        <Route path="admin" element={
          <React.Suspense fallback="Loading..."><Admin /></React.Suspense>
        }>
        <Route index element={<React.Suspense fallback="Loading...">
          <Users />
        </React.Suspense>}/>
        <Route path="/admin" element={<React.Suspense fallback="Loading...">
          <Users />
        </React.Suspense>}/>
        <Route path="users/:id" element={<React.Suspense fallback="Loading...">
          <Profile />
        </React.Suspense>}/>
        <Route path="settings" element={<React.Suspense fallback="Loading...">
          <Settings />
        </React.Suspense>}/>
        </Route>
        <Route path="*" element={<React.Suspense fallback="Loading...">
          <NotFound />
        </React.Suspense>}/>
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

