import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Home } from '../views/Home';
const About = React.lazy(() => import("../views/About"))
const Contact = React.lazy(() => import("../views/Contact"))
const NotFound = React.lazy(() => import("../views/NotFound"))

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={
        <React.Suspense fallback='Loading...'>
          <About />
        </React.Suspense>
      } />
      <Route path='contact' element={
        <React.Suspense fallback="Loading...">
          <Contact />
        </React.Suspense>
      } />
      <Route path='*' element={
        <React.Suspense fallback="Loading...">
          <NotFound />
        </React.Suspense>
      } />
    </Routes>
  )
}