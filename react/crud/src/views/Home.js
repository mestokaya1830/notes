import React, { useEffect, useState } from 'react'
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
      <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => {
              return <tr key={item.Personid}>
                  <td>{item.Personid}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.password}</td>
              </tr>
            })}
          </tbody>
      </table>
    </div>
  )
}
