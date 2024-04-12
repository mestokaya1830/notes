import React from 'react'
import { useParams } from 'react-router-dom'
export default function Profile() {
  const params = useParams()
  return (
    <div>
      <h2>User {params.id}</h2>
    </div>
  )
}
