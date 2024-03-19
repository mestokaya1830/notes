
import express from 'express'
const app = express()
import tryCatch from './tryCatch.js'
import Cryptr from 'cryptr'
const cryptr = new Cryptr('secret')
import formValidate  from './formValidation.js'
import helmet from 'helmet'

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const user = {
  name: 'mesto',
  email: 'mesto@outlook.com',
  password: '9090'
}

app.get('/users', tryCatch(async(req, res) => {
  user.password = cryptr.decrypt(user.password)
  res.json(user)
}))

app.post('/register', tryCatch(async(req, res) => {
  const errors = formValidate(user.name, user.email, user.password)
  if(errors.length > 0){
    res.json({errors:errors[0].message})
  } else{
    user.password = cryptr.encrypt(user.password)
    res.json(user)
  }
}))

// app.post('/login', tryCatch(async(req, res) => {
//   const loginUser = await Users.find({name: req.body.name})
//   if(loginUser.length > 0){
//     let dePass = cryptr.decrypt(loginUser[0].password)
//     if(req.body.password == dePass){
//       req.session.admin = loginUser[0].name
//       res.redirect('/admin/users')
//     } else{
//       req.flash('danger','Password not match')
//       res.render('login', {name:req.body.name,password: req.body.password})
//     }
//   } else {
//     req.flash('danger','User not found')
//     res.redirect('/login')
//   }
// }))

app.use((error, req, res, next) => {
  console.log('error', {error})
  next(error)
})

//listen server
app.listen(process.env.PORT || 3000, () => {
  console.log('Server listen...')
})