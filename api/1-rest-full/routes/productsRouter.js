import express from 'express'
const Router = express.Router()
import tryCatch  from '../middleware/tryCatch.js'

Router.get('/', tryCatch(async(req, res) => {
  res.status(200).json({message:'all products'})
}))

Router.post('/', tryCatch(async(req, res) => {
  res.status(200).json({message:req.body})
}))

Router.get('/:id', tryCatch(async(req, res) => {
  res.status(200).json({message: req.body})
}))

Router.put('/:id', tryCatch(async(req, res) => {
  res.status(200).json({message: req.body})
}))

Router.delete('/:id', tryCatch(async(req, res) => {
  res.status(200).json({message:req.body})
}))


export default Router