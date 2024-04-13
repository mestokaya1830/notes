import React from 'react'
import { Link } from 'react-router-dom'
function Users() {
  const Users = [
    {id: 1, name: 'Mesto', salary: 3000},
    {id: 2, name: 'Deniz', salary: 2000},
    {id: 3, name: 'Faruk', salary: 5000}
  ]
  return (
    <div>
      <h2>Users</h2>
      <div>
        {Users.map(item => (
          <nav key={item.id} className='user-list'>
            <Link to={`users/${item.id}`}>{item.id} {item.name} {item.salary}</Link>
          </nav>
        ))}
      </div>
    </div>
  )
}

export default Users
