import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CreateUser() {
  const navigate = useNavigate()
  let [message, setMessage] = useState('')
  const [data, setData] = useState({
    name: '',
    password: '',
    age: 0
  })

  const addUser = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/create-user', data)
    .then((res) => {
      setMessage(res.data)
      setTimeout(() => {
        navigate('/')
      }, 2000)
    })
    .then((err) => console.log(err))
  }
  return (
    <div>
      <h1>Create New User</h1>
      <h2>{message}</h2>
      <form onSubmit={addUser}>
        <input type='text' name="name" className='inputs' placeholder='Name' onChange={e => setData({...data, name: e.target.value})} />
        <input type='password' name="password" className='inputs' placeholder='Password' onChange={e => setData({...data, password: e.target.value})}/>
        <input type='number' name="age" className='inputs' placeholder='Age' onChange={e => setData({...data, age: e.target.value})}/>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}
