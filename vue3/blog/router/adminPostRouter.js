import express from 'express'
const router = express.Router()
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
  const {title, body, image} = JSON.parse(req.body.post)
  const newPost = new Posts({
    title: title,
    body: body,
    image: image,
    owner: req.session.auth.name
  })
  await newPost.save()
  const file = req.files.file
  await file.mv(path.resolve('public/uploads', post.image))
  res.status(200).json('New Post Created Successfully')
}))




export default router