import express from 'express'
const Router = express.Router()
import Posts from '../schemas/postsSchema.js'
import Categories from '../schemas/categorySchema.js'
import checkPost from '../../middleware/postValidation.js'
import checkComment from '../../middleware/commentValidation.js'

Router.get('/', async(req, res, next) => {
	const posts = await Posts.find()
	res.status(200).json({posts})
})

Router.get('/show/:id', async(req, res, next) => {
	const posts = await Posts.findById(req.params.id)
	res.status(200).json({'posts': posts})
})

Router.get('/add', async(req, res, next) => {
	const category = await Categories.find({})
	res.status(200).json({result: category})
})

Router.post('/add', async(req, res, next) => {
	const errors = checkPost(req.body.title, req.body.category, req.file.filename)
	if(errors.length > 0){
		req.status(200).json({message: errors[0].message})
		res.redirect('/')
	}else{
		const newPost = new Posts({
			title: req.body.title,
			commenttext: req.body.commenttext,
			category: req.body.category,
			date: new Date(),
			author: req.body.author,
			mainimage: req.file.filename
		})
		await newPost.save()
		req.status(200).json({message: 'Post Added'})
		res.redirect('/')
	}
})

Router.post('/addcomment', async(req, res, next) => {
	const errors = checkComment(req.body.name, req.body.email, req.body.commenttext)
	if(errors.length > 0){
		req.status(200).json({message: errors[0].message})
		res.redirect('/posts/show/'+req.body.postid)
	}else{
		const commentText = {
			name: req.body.name,
			email: req.body.email,
			commenttext: req.body.commenttext,
			commentdate: new Date()
		}
		await Posts.updateOne(
			{_id: req.body.postid},
			{$push:{comments: commentText}}
		)
		req.status(200).json({message: 'Comment Added'})
		res.redirect('/posts/show/'+req.body.postid)
	}
})

export default Router