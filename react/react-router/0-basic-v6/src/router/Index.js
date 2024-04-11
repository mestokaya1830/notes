import React from 'react'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from '../views/Home'
import MasterPage from '../layouts/MasterPage'
const About = React.lazy(() => import('../views/About'))
const Contact = React.lazy(() => import('../views/Contact'))
const NotFound = React.lazy(() => import('../views/NotFound'))

function Index() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MasterPage />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={
          <React.Suspense fallback="Loading...">
            <About />
          </React.Suspense>
        }/>
        <Route path="/contact" element={
          <React.Suspense fallback="Loading...">
            <Contact />
          </React.Suspense>
        }/>
        <Route path="*" element={
          <React.Suspense fallback="Loading...">
            <NotFound />
          </React.Suspense>
        }/>
      </Route>
    )
  )
  // const Router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     errorElement: <NotFound />
  //   },
  //   {
  //     path: "/about",
  //     element: <About />
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />
  //   }
  // ])
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}

export default Index
