import express from 'express'
const app = express()
import cors from 'cors'
import db from './modules/db.js'

app.use(express.json())
app.use(cors())

app.get('/users', (req, res) => {
  db.query("Select * From users", (err, data) => {
    if(err){
      console.log(err)
      res.status(400).json({message:err})
    } else {
      res.status(200).json({result:data})
    }
  })
})

app.get('/users/:id', (req, res) => {
  db.query("Select * From users Where id = ?", [req.params.id], (err, data) => {
    if(err){
      console.log(err)
      res.status(400).json({message:err})
    } else {
      res.status(200).json({result:data})
    }
  })
})

app.post('/adduser', (req, res) => {
  const {username, password} = req.body
  db.query("Insert Into users(username, password) Values(?,?)", [username, password], (err) => {
    if(err){
      console.log(err)
      res.status(400).json({message:err})
    } else {
      res.status(200).json({message:'New User Added'})
    }
  })
})

app.put('/updateuser/:id', (req, res) => {
  console.log(req.body)
  const {password} = req.body
  db.query("Update users Set password = ? Where id = ?", [password, req.params.id], (err) => {
    if(err){
      console.log(err)
      res.status(400).json({message:err})
    } else {
      res.status(200).json({message:'User Updated'})
    }
  })
})

app.delete('/deleteuser/:id', (req, res) => {
  db.query("Delete From users Where id = ?", [req.params.id], (err) => {
    if(err){
      console.log(err)
      res.status(400).json({message:err})
    } else {
      res.status(200).json({message:'User Deleted'})
    }
  })
})

app.use((req, res) => {
  res.status(404).json({error:'Page Not Found'})
})

app.use((err, req, res, next) => {
  console.log(err)
  next(err)
})

app.listen(4000, () => {
  console.log('Server is running...')
})