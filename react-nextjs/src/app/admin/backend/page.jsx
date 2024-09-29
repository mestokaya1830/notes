"use client";
let final = {}
const getUsers = async () => {
  const result = await fetch('http://localhost:3000/api/users')
  final = await result.json()
}
getUsers()

export default function Backend() {
  console.log(final)
  return (
    <>
      <h1>Backend</h1>
    </>
  )
}
