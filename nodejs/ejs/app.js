import express from 'express'
const app = express()
import expressLayouts from 'express-ejs-layouts'
import './models/db.js'
import Users from './models/usersSC.js'

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('static'))

app.use(expressLayouts)
app.set('view engine', 'ejs')

app.get('/', async(req, res) => {
  const result = await Users.find({})
  res.render('home', {
    title: 'Home Page',
    users: result
  })
})

app.get('/register', (req, res) => {
  res.render('register', {title: 'Register Page'})
})

app.post('/register', async(req, res) => {
  const newUser = new Users({
    name: req.body.name,
    password: req.body.password
  })
  await newUser.save()
  res.redirect('/')
})

app.get('/edit/:id', async(req, res) => {
  const result = await Users.findOne({_id: req.params.id})
  res.render('edit', {
    title: 'Edit User',
    user: result
  })
})

app.post('/edit/:id', async(req, res) => {
  await Users.updateOne({_id: req.params.id}, {$set: {password: req.body.password}})
  res.redirect('/')
})

app.post('/delete/:id', async(req, res) => {
  console.log(req.params.id)
  await Users.deleteOne({_id: req.params.id})
  res.redirect('/')
})


app.use((req, res) => {
  res.status(404).send('Page Not Found')
})

app.use((error, req, res, next) => {
  // res.status(500).json(error)
  next(error)
})

app.listen(3000, () => console.log('Server is running...'))