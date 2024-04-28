import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Edit() {
  //for update
  const [user, setUser] = useState({
    password: ''
  })
  const params = useParams()
  const navigate = useNavigate()

  const editUser = (id) => {
    axios.patch('http://localhost:3000/api/users/'+ id, user ).then(result => {
      alert(result.data.message)
      navigate(-1)
    }).catch(err => console.log(err))
  }
  return (
    <div className='wrapper'>
      <h2>Edit Users</h2>
      <br />
      <input type='text' onChange={e => setUser({...user, password: e.target.value})} placeholder='New password...' className='inputs' />
      <button className='list-item list-btn update' onClick={() => editUser(params.id)}>Update</button>
    </div>
  )
}

export default Edit
