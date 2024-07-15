import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/')
    .then((res => setData(res.data.users)))
    .catch((err) => console.log(err))
  }, [])
  
  return (
    <div>
      <h1>Home</h1>
      <NavLink to="/create-user">Create User</NavLink>
      <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th colSpan={3}>Proccess</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => {
              return <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td><Link to={`/details/${item.id}`}>Details</Link></td>
              </tr>
            })}
          </tbody>
      </table>
    </div>
  )
}
