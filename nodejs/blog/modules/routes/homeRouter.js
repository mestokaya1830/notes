import express from 'express'
const Router = express.Router()
import Posts from '../schemas/postsSchema.js'

Router.get('/', async(req, res, next) => {
	const posts = await Posts.find({})
	res.status(200).json({ posts: posts})
})

export default Router
