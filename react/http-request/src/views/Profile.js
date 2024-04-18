import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Profile() {
  const params = useParams()
  const navigate = useNavigate()
  return (
    <div>
      <h1>Profile</h1>
      <br/>
      <h2>User {params.id}</h2>
      <br/>
      <input type='button' value="Go Back"  onClick={() => navigate(-1)} className='input-btn'/>
    </div>
  )
}

export default Profile
