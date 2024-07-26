import express from 'express'
const router = express.Router()
import tryCatch from '../middleware/tryCatch.js'

import path from 'path'
import Posts from '../models/postsSC.js'


router.get('/', tryCatch(async(req, res) => {
  const posts = await Posts.find({})
  res.status(200).json({posts})
}))
router.get('/:user/posts', tryCatch(async(req, res) => {
  const posts = await Posts.find({owner: req.params.user})
  res.status(200).json({posts})
}))

router.get('/:user/post/:id', tryCatch(async(req, res) => {
  const post = await Posts.findOne({_id: req.params.id})
  res.status(200).json({post})
}))

router.post('/create', tryCatch(async(req, res) => {
  const post = JSON.parse(req.body.post) 
  const newPost = new Posts({
    title: post.title,
    body: post.body,
    image: post.image,
    owner: req.session.auth.name
  })
  await newPost.save()
  const file = req.files.file
  await file.mv(path.resolve('public/uploads', post.image))
  res.status(200).json('New Post Created Successfully')
}))




export default router