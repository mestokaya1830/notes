import Link from 'next/link'

export const metadata = {
  title:"Fetch APi",
  description:"Fetch Api Page Description"
}

const getUsers = async() => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users')
  // const result = await fetch('https://jsonplaceholder.typicode.com/users', {cache: "no-cache"})
  // const result = await fetch('https://jsonplaceholder.typicode.com/users', {cache: "no-store"})
  // const result = await fetch('https://jsonplaceholder.typicode.com/users', {next:{revalidate: 30}})//every 30 seconds refresh
  if(result.status == 200){
    return result.json()
  }
}

export default async function Fetch() {
  const users = await getUsers()
  return (
    <div>
      <h1>Fetch Api</h1>
      <ul>
        {users && users.map(item => (
          <li key={item.id}>
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span>{item.email}</span>
            <span><Link href={`fetch-api/${item.id}`}>Details</Link></span>
          </li>
        ))}
      </ul>
    </div>
  )
}
