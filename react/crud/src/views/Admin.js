import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Admin() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/users').then(result => {
      setData(result.data)
    })
    .catch(err => console.log(err))
  }, [])
  
  
  const deleteUser = (id) => {
    axios.delete('http://localhost:3000/api/users/'+ id ).then(result => {
      alert(result.data.message)
      window.location.reload()
    }).catch(err => console.log(err))
  }
  return (
    <div className='wrapper'>
      <h2>Admin</h2>
      <br />
      <Link to="adduser"><input type='button' className='add-btn' value="Add New User" /></Link>
      <br />
        {data.map(item => {
          return <li className='list' key={item.ID}>
            <span className='list-item'>{item.ID}</span>
            <span className='list-item'>{item.name}</span>
            <span className='list-item'>{item.password}</span>
            <span> <Link to={`users/${item.ID}`}><button className='list-btn edit'>Edit</button></Link></span>
            <span className='list-btn delete' onClick={() => deleteUser(item.ID)}>Delete</span>
           </li>
        })}
    </div>
  )
}

export default Admin
