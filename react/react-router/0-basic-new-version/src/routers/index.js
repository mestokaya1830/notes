import { createBrowserRouter } from 'react-router-dom';

import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Users from '../views/Users'
import Profile from '../views/Profile'
import Admin from '../views/Admin'
import Members from '../views/dashboard/Members'
import Settings from '../views/dashboard/Settings'
import NotFound from '../views/NotFound'

// const Login = React.lazy(() => import('../views/Login'))
// const Register = React.lazy(() => import('../views/Register'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/users',
    element: <Users />
  },
  {
    path: '/users/:id',
    element: <Profile />
  },
  {
    path: '/admin',
    element: <Admin />,
    children:[
      {
        path: '/admin/members',
        element: <Members />,
      },
      {
        path: '/admin/settings',
        element: <Settings />,
      }
    ]
  }
])

// function index() {
//   return (
//    <Routes>
//       <Route path='/' element={<Home />}></Route>
//       <Route
//           path='/login' element={
//           <React.Suspense fallback="Loading...">
//             <Login />
//           </React.Suspense>
//           }
//       />
//       <Route
//           path='/register' element={
//           <React.Suspense fallback="Loading...">
//             <Register />
//           </React.Suspense>
//           }
//       />
//       <Route
//           path='*' element={
//           <React.Suspense fallback="Loading...">
//             <NotFound />
//           </React.Suspense>
//           }
//       />
//    </Routes>
//   )
// }

export default router
