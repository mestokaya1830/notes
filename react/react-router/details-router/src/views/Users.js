import React from 'react'
import { Link } from 'react-router-dom'
function Users() {
  const Users = [
    {id: 1, name:'Mustafa'},
    {id: 2, name:'Deniz'},
    {id: 3, name:'Faruk'}
  ]
  return (
    <div>
      <h2>Users</h2>
      <div className='user-list-con'>
        {Users.map(item => (
          <Link key={item.id} to={`/users/${item.id}`} className='user-list'>{item.name}</Link>
          // <a key={item.id} href={`/users/${item.id}`}>{item.name}</a>
        ))}
      </div>
    </div>
  )
}

export default Users
