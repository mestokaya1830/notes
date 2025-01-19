import express from 'express'
const app = express()
import db from './0-db.js'


app.use(express.json())

app.use((err, req, res, next) => {
  console.log(err)
  next()
})

app.listen(3000, () => {
  //db() with async connection
  console.log('Server is running...')
})