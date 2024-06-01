import express from 'express'
const Router = express.Router()
import Category from '../schemas/categorySchema.js'
import Posts from '../schemas/postsSchema.js'

Router.get('/show/:category', async(req, res) => {
	await Posts.findone({category: req.params.category})
	res.status(200).json({'title': req.params.category,'posts': posts})
})

Router.get('/add', async(req, res) => {
	res.status(200).json({'title': 'Add Category'	})
})

Router.post('/add', async(req, res) => {
	const newCategory = new Category({
		name: req.body.name
	})
	await newCategory.save()
	res.status(200).json({message: 'Category Added'})
})

export default Router