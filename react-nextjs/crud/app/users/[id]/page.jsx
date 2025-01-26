"use client"

import { useParams } from "next/navigation"

export default function Details() {
  const {id} = useParams()
  return (
    <>
      <h1>Details User</h1>
      <form action="">
        <span></span>
        <input type="text" name="password" placeholder='Password' />
        <input type="submit" value="Update" />
      </form>
    </>
  )
}
