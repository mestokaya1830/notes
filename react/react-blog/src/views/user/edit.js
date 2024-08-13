import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Edit() {
  const {id} = useParams()
  const [data, setData] = useState({
    title: '',
    body: '',
    _id: id
  })
  const [file, setFile] = useState()

  useEffect(() => {
    axios.get(`http://localhost:3000/api/user/posts/post/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [id])

  const handelInputs = (e) => {
    const val = e.target.value
    setData(values => ({...values, [e.target.name]: val}))
  }
  const selectImage = (e) => {
    setFile(e.target.files[0])
  }
  const updatePost = (e) => {
    e.preventDefault()
    const frmData = new FormData()
    frmData.append('file', file)
    frmData.append('post', JSON.stringify(data))
    axios.post('http://localhost:3000/api/user/posts/update', frmData)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => console.log(err))
  }
  return (
    <>
      <h1>Edit</h1>
      <div className='container'>
        <form onSubmit={updatePost} id="form" className="border rounded p-4" encType="multipart/form-data">
          <div className="mb-3 row">
            <label htmlFor="title">Title</label>
            <div>
              <input type="text" className="form-control" name="title" value={data.title} onChange={handelInputs} />
              {/* <div className="text text-danger mt-2" v-if="error.title"></div> */}
            </div>
            <label htmlFor="body">Body</label>
            <div>
              <textarea className="form-control" rows="10" name="body" id="body" value={data.body} onChange={handelInputs}></textarea>
              {/* <div className="text text-danger mt-2" v-if="error.body"></div> */}
            </div>
            <label htmlFor="title">Image</label>
            <img className='updateImage' src={`/uploads/${data.imageName}`}  alt="no image"/>
            <div>
              <input type="file" name="file" onChange={selectImage} accept="image/*" />
              <div className="text text-danger mt-2" v-if="error.file"></div>
            </div>
            <div className="d-grid mt-3">
              <button type='submit' className="btn btn-dark">Update Post</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
