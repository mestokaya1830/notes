import express from 'express'
import helmet from 'helmet';
const app = express()
import userRouter from './router/usersRouter.js'
import dbConn from './config/db.js'

app.use(helmet())
app.use(express.json())

app.use('/', userRouter)


app.use((err, req, res, next) => {
  console.log(err)
  res.status(400).json({errors: err})
  next()
})

app.use((req, res) => {
  res.status(404).json({message:'Page Not Foud'})
})

app.listen(3000, () => {
  console.log('Server is Running...')
  dbConn()
})