import { NextResponse } from "next/server"

const getUsers = async () => {
  const result =  await fetch('https://jsonplaceholder.typicode.com/users')
  return await result.json()
}

export async function GET(req, res) {
  const users = await getUsers()
  return NextResponse.json(users)
}