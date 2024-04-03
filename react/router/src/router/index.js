import { Routes, Route} from 'react-router-dom'
import { Home } from '../views/Home';
import { Users } from '../views/Users';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/users' element={<Users />}></Route>
    </Routes>
  )
}