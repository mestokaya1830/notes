import { Link } from 'react-router-dom'

function Users() {
  return (
    <div>
      <h2>Users</h2>
      {/* <button onClick={() => navigate('/')}>Back </button> */}
      <div className='profile-links'>
        <Link to={`/users/${1}`} className='links'>User 1 Profile</Link>
        <Link to={`/users/${2}`} className='links'>User 2 Profile</Link>
        <Link to={`/users/${3}`} className='links'>User 3 Profile</Link>
      </div>
    </div>
  )
}

export default Users

