import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddUser() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: '',
    password: ''
  })

  const newUser = (e) => {
    e.preventDefault();
    console.log(user)
    axios.post('http://localhost:3000/api/adduser', user).then(result => {
      console.log(result.data)
      navigate('/admin')
    })
  }
  return (
    <div className='wrapper'>
      <form onSubmit={newUser}>
        <input type='text' onChange={e => setUser({...user, name: e.target.value})} placeholder='Name...' className='inputs' />
        <input type='password' onChange={e => setUser({...user, password: e.target.value})} placeholder='Password...' className='inputs' />
        <button className='input-btn'>Add New User</button>
      </form>
    </div>
  )
}

export default AddUser
