import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Create() {
  const [data, setData] = useState({
    title: '',
    body: ''
  })
  const [file, setFile] = useState()

  const handelInputs = (e) => {
    const val = e.target.value
    setData(values => ({...values, [e.target.name]: val}))
  }
  const selectImage = (e) => {
    setFile(e.target.files[0])
  }
  const createPost = (e) => {
    e.preventDefault()
    const frmData = new FormData()
    frmData.append('file', file)
    frmData.append('post', JSON.stringify(data))
    axios.post('http://localhost:3000/api/user/posts/create', frmData)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => console.log(err))
  }
  return (
    <>
      <h1>Create New Products</h1>
      <div className='container'>
        <form onSubmit={createPost} id="form" className="border rounded p-4" encType="multipart/form-data">
          <div className="mb-3 row">
            <label htmlFor="title">Title</label>
            <div>
              <input type="text" className="form-control" name="title" onChange={handelInputs} />
              {/* <div className="text text-danger mt-2" v-if="error.title"></div> */}
            </div>
            <label htmlFor="body">Body</label>
            <div>
              <textarea className="form-control" rows="10" name="body" id="body" onChange={handelInputs}></textarea>
              {/* <div className="text text-danger mt-2" v-if="error.body"></div> */}
            </div>
            <label htmlFor="title">Image</label>
            <div>
              <input type="file" name="file" onChange={selectImage} accept="image/*" />
              <div className="text text-danger mt-2" v-if="error.file"></div>
            </div>
            <div className="d-grid mt-3">
              <button type='submit' className="btn btn-dark">Create New Post</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
