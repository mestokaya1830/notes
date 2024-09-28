import React from 'react'
import Button from '../../../copmonents/backBtn'
import { getUsers } from '../page.jsx'

export default async function Details({params}) {
  const users = await getUsers()
  const user = users.filter((item => item.id == params.id))[0]
  console.log(user)//to test generateStaticParams
  return (
    <>
      <h2>User Details</h2>
      <ul>
        <li>
          <span>{user.id}</span>
        </li>
        <li>
          <span>{user.name}</span>
        </li>
        <li>
          <span>{user.email}</span>
        </li>
      </ul>
      <Button />
    </>
  )
}

//generateStaticParams
export async function generateStaticParams(){
  const users = await getUsers()
  return users.map(item => {id: `${item.id}`})
}