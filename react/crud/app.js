import express from 'express'
import 'dotenv/config'
// import helmet from  'helmet'
import mysql from './models/db.js'
import path from 'path'
import cors from 'cors'
const app = express()


app.use(express.json())
app.use(express.static('static'))
app.use(express.urlencoded({extended: true}))
// app.use(helmet())
app.use(cors())

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('build'))
  app.get('*', (req, res) => res.sendFile(path.resolve('build/index.html')))
}

app.get('/', async(req, res) => {
  const [ users ] = await mysql.query('Select * From users')
  console.log(users)
  res.status(200).json({users})
})

app.use((err, req, res, next) => {
  console.log(err)
  next()
})

app.use((req, res) => {
  console.log('Page not found!')
})

app.listen(4000, () => console.log('Server is running...'))