import express from 'express'
const app = express()
import 'dotenv/config'

import db from './0-db.js'

app.use(express.json())

app.use((err, req, res, next) => {
  console.log(err)
  next()
})

app.listen(process.env.PORT, () => {
  //with async connection
  // db() 
  console.log('Server is running...')
})