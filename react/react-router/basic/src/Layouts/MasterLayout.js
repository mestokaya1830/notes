import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
function MasterLayout() {
  return (
    <div>
      <Navbar />
      <main className='router'>
        <Outlet />
      </main>
    </div>
  )
}

export default MasterLayout
