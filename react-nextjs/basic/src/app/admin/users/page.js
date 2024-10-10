import Link from 'next/link';
export const getUsers = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users')

  //build app to see cache or not
  // const result = await fetch('https://jsonplaceholder.typicode.com/users', {cache:"no-cache"})
  // const result = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 60}})//every 60 second refresh
  return result.json()
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
          <span>{item.email}</span>
          <span><Link href={`/admin/users/${item.id}`}>Details</Link></span>
        </li>
       )}
      </ul>
    </>
  )
}
