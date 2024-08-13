import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Index() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/client/')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [])
  console.log(data)
  return (
    <>
      <h1>Home</h1>
      <div className='container'>
        <div className='row'>
          {data.map(item =>
            <div className='col-sm-6' key={item._id}>
              <div className='card'>
                <div className='card-body'>
                  <h2>{item.title}</h2>
                  <p>{item.createdAt} <a href="/">{item.owner}</a></p>
                  <span>{String(item.body).substring(0,100)}</span>
                <div>
                  <a href="/">Read more...</a>
                </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
