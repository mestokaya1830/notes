import express from 'express'
import helmet from 'helmet'
import 'dotenv/config'
import mongoose from 'mongoose'
import path from 'path'
const app = express()

app.use(express.json())
app.use(express.static('dist'))
app.use(helmet())

const mongo = mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Connected'))
.catch((err) => console.log(err))

if(process.env.NODE_ENV == 'production'){
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'))
  })
}
app.get('/', async(req, res) => {
  res.status(200).json({message: 'Hello'})
})

app.use((req, res) => {
  res.status(404).json('Page Not Found')
})

app.use((error, req, res, next) => {
  res.status(500).json({error: error.message})
  next()
})

app.listen(process.env.PORT || 4000, () => console.log('Server is running...'))