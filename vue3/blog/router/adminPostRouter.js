import express from 'express'
const router = express.Router()
import fs from 'fs'
import tryCatch from '../middleware/tryCatch.js'

import path from 'path'
import Posts from '../models/postsSC.js'


router.get('/posts', tryCatch(async(req, res) => {
  const posts = await Posts.find({owner: req.session.auth.name})
  res.status(200).json({posts})
}))

router.get('/post/:id', tryCatch(async(req, res) => {
  const post = await Posts.findOne({_id: req.params.id})
  res.status(200).json({post})
}))

router.post('/create', tryCatch(async(req, res) => {
  const {title, body, imageName} = JSON.parse(req.body.post)
  const newPost = new Posts({
    title: title,
    body: body,
    imageName: imageName,
    owner: req.session.auth.name
  })
  await newPost.save()
  const file = req.files.file
  await file.mv(path.resolve('public/uploads', imageName))
  res.status(200).json('New Post Created Successfully')
}))

router.post('/update', tryCatch(async(req, res) => {
  console.log(req.files)
  const {_id, title, body, imageName} = JSON.parse(req.body.post)
  if(req.files != null){
    const imagePath = './public/uploads/'+imageName
    if (fs.existsSync(imagePath)){
      fs.rmSync(imagePath, { recursive: true }, () => {
        res.json({code:200})
      })
    }
    const file = req.files.file
    await file.mv(path.resolve('public/uploads', imageName))
    await Posts.updateOne({_id: _id}, {$set:{title: title, body: body, imageName: imageName}})
  }
  await Posts.updateOne({_id: _id}, {$set:{title: title, body: body}})
  res.status(200).json('New Post Updated Successfully')
}))

router.post('/delete/:id', tryCatch(async(req, res) => {
  const imagePath = './public/uploads/'+ req.body.imageName
  if (fs.existsSync(imagePath)){
    fs.rmSync(imagePath, { recursive: true }, () => {
      res.json({code:200})
    })
  }
  await Posts.deleteOne({_id: req.params.id})
 
  res.status(200).json('New Post Deleted Successfully')
}))


export default router