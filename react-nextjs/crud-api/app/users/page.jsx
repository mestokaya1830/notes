import Link from 'next/link'
import {HiPencilAlt} from 'react-icons/hi'
import Deletebtn from '@/components/deletebtn'

const getUsers = async() => {
  try {
    const result = await fetch('http://localhost:3000/api/users')
    if(!result){
      throw new Error('No Data')
    }
    return result.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function Users() {
  const data = await getUsers()
  return (
    <>
      <h1>Users</h1>
      <Link href="/adduser">Add New User</Link>

      <ul>
        {data && data.map(item => (
          <li key={item._id}>
            <span>{item.username}</span>
            <span>{item.password}</span>
            <Link href={`users/${item._id}`}><HiPencilAlt size={24} /></Link>
            <Deletebtn id={item._id}/>
          </li>
        ))}
      </ul>
    </>
  )
}
