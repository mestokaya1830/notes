import express from 'express'
const app = express()
import cors from 'cors'
// import db from './modules/db.js'
import Wrap from './modules/tryWrap.js'
import Nested from './modules/nestedSC.js'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()
app.use(cors({credentials: true}))
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '3mb' }))
app.use(express.static('dist'))


app.get('/', Wrap(async(req, res) => {
  // const nested = await Nested.find()
  // res.json(nested)
}))
app.post('/limitsettings', Wrap(async(req, res) => {
  console.log(req.body.limitsettings)
  res.json('saved')
}))
app.post('/creditlogs', Wrap(async(req, res) => {
  console.log(req.body.creditlogs)
  res.json('saved')
}))
app.get('/api/gamelogs', Wrap(async(req, res) => {
  res.json('saved')
}))

if(process.env.NODE_ENV == 'production'){
  app.use(express.static('dist'))
  app.get('*', (req, res) => res.sendFile(path.resolve('dist/index.html')))
}

app.use((error, req, res, next) => {
  console.log(error)
})

app.use((req, res)=>{
  res.status(404).send('page not found')
})

app.listen(3000, () => {
  console.log('Server is running...')
})