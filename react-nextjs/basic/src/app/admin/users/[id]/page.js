import { getUsers } from "../page"

export default async function Details({params}) {
  const {id} = await params
  const users = await getUsers()
  const user = users.filter(item => item.id == id)[0]
  return (
    <>
      <h1>User Details</h1>
      <ul>
          <li>{user.id}</li>
          <li>{user.name}</li>
          <li>{user.email}</li>
      </ul>
    </>
  )
}

export async function generateStaticParams() {
  const users = await getUsers()
  return users.map(item => ({id: `${item.id}`}))
}