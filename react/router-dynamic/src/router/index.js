import { Routes, Route} from 'react-router-dom'
import { Home } from '../views/Home';
import { Users } from '../views/Users';
import { UserDetails } from '../views/UserDetails';
import { NotFound } from '../views/NotFound';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='users' element={<Users />} />
      <Route path='users/:id' element={<UserDetails />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}