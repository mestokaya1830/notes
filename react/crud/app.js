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
  res.status(200).json({users})
})

app.post('/create-user', async(req, res) => {
  await mysql.query('Insert Into users(name, password, age)Values(?,?,?)', [req.body.name, req.body.password, req.body.age])
  res.status(200).json('User created')
})

app.get('/details/:id', async(req, res) => {
  const [ user ] = await mysql.query('Select * From users Where id = ? LIMIT 1', [req.params.id])
  res.status(200).json({user})
})

app.put('/update/:id', async(req, res) => {
  console.log(req.params.id)
  await mysql.query('Update users Set password = ? , age = ?', [req.body.password, req.body.age ])
  res.status(200).json('User updated')
})

app.post('/delete/:id', async(req, res) => {
  await mysql.query('Delete From users Where id = ?', [req.params.id])
  res.status(200).json('User deleted')
})

app.use((err, req, res, next) => {
  console.log(err)
  next()
})

app.use((req, res) => {
  console.log('Page not found!')
})

app.listen(4000, () => console.log('Server is running...'))