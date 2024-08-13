import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Index() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
  },[])
  return (
    <>
      <h1>Home</h1>
      <ul>
        {data.map(item => 
          <li key={item._id}>
            <span>{item.title}</span>
            <span>{item.price}</span>
          </li>
        )}
      </ul>
    </>
  )
}
