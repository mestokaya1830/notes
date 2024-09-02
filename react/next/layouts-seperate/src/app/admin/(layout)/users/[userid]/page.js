import React from 'react'
import { notFound } from 'next/navigation'
export default function Userdetails({params}) {
  {
    if(parseInt(params.userid) > 3) {
      notFound()
    }
  }
  return (
    <>
      <h1>User Details</h1>
      <h2>User {params.userid}</h2>
    </>
  )
}
