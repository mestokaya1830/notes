import express from 'express'
import 'dotenv/config'
import helmet from 'helmet'
import db from './modules/db.js'
import path from 'path'
import tryCatch from './middleware/tryCatche.js'
import cors from 'cors'
const app = express()

// app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.static('build'))


app.get('/api/users', tryCatch((req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    res.status(200).json(result)
  })
}))

app.post('/api/adduser', tryCatch((req, res) => {
  console.log(req.body)
  db.query('INSERT INTO users(name, password)Values(?,?)', [req.body.name, req.body.password], (err, result) => {
    if(err) console.log(err)
    res.status(200).json(result)
  })
}))

app.patch('/api/users/:id', tryCatch((req, res) => {
  console.log(req.body)
  db.query('UPDATE users SET password = ? Where ID = ?',[req.body.password, req.params.id], (err, result) => {
    res.status(200).json({message:'Updated'})
  })
}))

app.delete('/api/users/:id', tryCatch((req, res) => {
  console.log(req.params.id)
  db.query('DELETE FROM users Where ID = ?',[req.params.id], (err, result) => {
    res.status(200).json({message:'Deleted'})
  })
}))

if(process.env.NODE_ENV === 'production'){
  app.get('*', function (req, res) {
    res.sendFile(path.resolve('./build/index.html'));
  });
}

app.use((err, req, res, next) => {
  console.log(err)
  next()
})
app.listen(process.env.PORT, () => {
  console.log('Server is running...')
})