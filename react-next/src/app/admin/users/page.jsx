import Link from 'next/link'

export const getUsers = async() => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users')
  // const result = await fetch('https://jsonplaceholder.typicode.com/users', {cache: "no-cache"})
  // const result = await fetch('https://jsonplaceholder.typicode.com/users', {next:{revalidate: 10}})//cache only 10 seconds
  return  result.json()
}

 export default async function Users() {
  const users = await getUsers()

  //if you have multiple fetch requests use parallel promise instead of mulitple await
  // const users1 = getUsers1()
  // const products = getProducts()
  // const orders = getOrders()
  // const result = await Promise.all([users1, products, orders])
  // const [users1, products, orders] = await Promise.all([users1, products, orders]) //or with destructer
  // console.log()

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
