import express  from 'express'
const app = express()
import mongoose from 'mongoose'
import db from './modules/db.js'
import cors from 'cors'
import helmet from 'helmet'

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(helmet())

const personsSchema = new mongoose.Schema({} , {strict: false})
const Persons = new mongoose.model('Persons', personsSchema)

app.post('/', async(req, res) => {
  let page = req.body.page === '' ? 1 : req.body.page
  let limit = 50
  const result = await Persons.find({},{_id:0}).limit(limit).skip((page-1) * limit)
  const length = await Persons.aggregate([{$count:'count'}])
  res.json({result:result,length:length})
})

app.use((err, req, res, next) => {
  console.log(err)
  next()
})

app.listen(3000, () => {
  console.log('Server is running...')
})