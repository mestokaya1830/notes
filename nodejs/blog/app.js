import express from 'express'
const app = express()
import 'dotenv/config'
import session from 'express-session'
import db from './modules/db.js'
import homeRouter from './modules/routes/homeRouter.js'
import postsRouter from './modules/routes/postsRouter.js'
import categoriesRouter from './modules/routes/categoriesRouter.js'
import fileUpload from 'express-fileupload'
import helmet from 'helmet'
import MongoStore from 'connect-mongo'

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '3mb' }))
app.use(express.static('public'))

app.use(session({
  name:'secret_name',
  secret: 'secret_key',
  resave: true,
  saveUninitialized: false,
  rolling: true,
  cookie: { 
  maxAge: 12 * 3600000,
    httpOnly: true,
    secure: false,
  },//12 hour
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URL,
    autoRemove: 'native'
  })
}))


app.use('/api', homeRouter)
app.use('/posts', postsRouter)
app.use('/categories', categoriesRouter)


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

app.listen(process.env.PORT, () =>{
  console.log('Server is running...')
})