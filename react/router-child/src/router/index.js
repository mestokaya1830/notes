import { Routes, Route} from 'react-router-dom'
import { Home } from '../views/Home';
import { Admin } from '../views/Admin';
import { Users } from '../views/admin/Index';
import { Settings } from '../views/admin/Settings';
import { NotFound } from '../views/NotFound';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='admin' element={<Admin />}>
        <Route index element={<Users />} />
        <Route path='users' element={<Users />} />
        <Route path='settings' element={<Settings />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}