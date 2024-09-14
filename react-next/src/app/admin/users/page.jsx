import Link from 'next/link'

export const getUsers = async() => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users')
  return  result.json()
}
 export default async function Users() {
  const users = await getUsers()
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(item => 
          <li key={item.id}>
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span><Link href={`users/${item.id}`}>Details</Link></span>
          </li>
        )}
      </ul>
    </>
  )
}
