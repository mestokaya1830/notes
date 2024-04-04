import { Routes, Route} from 'react-router-dom'
import { Home } from '../views/Home';
import { Users } from '../views/Users';
import { NotFound } from '../views/NotFound';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='users' element={<Users />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}