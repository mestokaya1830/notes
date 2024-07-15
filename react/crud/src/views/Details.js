import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Details() {
  const [data, setData] = useState({
    password: '',
    age: ''
  })
  const [message, setMessage] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:4000/details/'+id)
    .then((res => {
      setData(res.data.user[0])
    }))
    .catch((err) => console.log(err))
  }, [id])

  const deleteUser = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/delete/'+id)
    .then((res => {
      setMessage(res.data)
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }))
    .catch((err) => console.log(err))
  }

  const updateUser = (e) => {
    e.preventDefault();
    axios.put('http://localhost:4000/update/'+id, data)
    .then((res => {
      setMessage(res.data)
    }))
    .catch((err) => console.log(err))
  }
  return (
    <div>
      <h1>Details</h1>
      <h2>{message}</h2>
      <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Password</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td><input type='text' name="password" className='inputs' placeholder='Password' value={data.password} onChange={e => setData({...data, password: e.target.value})}/></td>
              <td><input type='number' name="age" className='inputs' placeholder='Age' value={data.age} onChange={e => setData({...data, age: e.target.value})}/></td>
        
            </tr>
            <tr>
              <td><button onClick={updateUser}>Update</button></td>
              <td><button onClick={deleteUser}>Delete</button></td>
              </tr>
          </tbody>
      </table>
    </div>
  )
}
