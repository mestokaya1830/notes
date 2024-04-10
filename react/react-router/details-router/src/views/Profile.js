import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Profile() {
  const params = useParams()
  const navigate = useNavigate()
  return (
    <div>
      <h2>User Profile</h2>
      <h3 className='profile'>User {params.id}</h3>

      <button className='back-btn' onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default Profile
