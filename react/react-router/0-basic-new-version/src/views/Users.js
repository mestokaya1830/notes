import { Link } from 'react-router-dom'

function Users() {
  const users = [
    {id: 1, name:'Mesto'},
    {id: 2, name:'Filiz'},
    {id: 3, name:'Bidik'},
    {id: 4, name:'Helin'},
    {id: 5, name:'Ilos'}
  ]
  return (
    <div className='user-list'>
      {users.map(item  => (
        <Link key = {item.id} to={`/users/${item.id}`}>{item.name}</Link>
      ))}
    </div>
  )
}

export default Users
