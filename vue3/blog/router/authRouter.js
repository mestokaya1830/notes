import express from 'express'
const router = express.Router()
import tryCatch from '../middleware/tryCatch.js'
import nodeMailer from 'nodemailer'
import Users from '../models/usersSC.js'
import Cryptr from "cryptr";
const cryptr = new Cryptr("myTotalySecretKey");

router.post('/login', tryCatch(async(req, res) => {
  const checkEmail = await Users.findOne({email: req.body.user.email}).limit(1)
  if(checkEmail && cryptr.decrypt(checkEmail.password) == req.body.user.password){
    req.session.auth = checkEmail
    res.status(200).json(checkEmail)
    return false
  } else {
    res.status(201).json('User not Exists!')
  }
}))

router.post('/register', tryCatch(async(req, res) => {
  const checkEmail = await Users.findOne({email: req.body.user.email}).limit(1)
  if(checkEmail){
    res.status(201).json('This email exists')
    return false
  } else {
    const newUser = new Users({
      name: req.body.user.name,
      email: req.body.user.email,
      password: cryptr.encrypt(req.body.user.password)
    })
    await newUser.save()
    req.session.auth = checkEmail
    res.status(200).json('New User Registered')
  }
}))

router.post('/emil-verification', tryCatch(async(req, res) => {
  const token = Math.random().toString(36).substring(2,50)
  
  const transporter = nodeMailer.createTransport({
    host: "smtp-mail.outlook.com",
    auth: {
      user:'mesto1830@outlook.com',
      pass: 'MK1972mk11130113'
    }
  })
  
  const mailoption  = {
    from: 'mesto1830@outlook.com',
    to: req.body.email,
    subject: 'Password Reset Request',
    text: 'To reset password please click link below...',
    html: `
    <h2>To reset password please click this Reset-Password link'</h2>
    <a href="http://localhost:5173/reset-password/${token}">Reset Password</a>
    `
  }
  
  transporter.sendMail(mailoption,(err, info) =>{
    if (err) {
      console.log(err)
    }
  })
  res.status(200).json('Reset-Password link sent to your Email')
}))

router.post('/reset-password', tryCatch(async(req, res) => {
  console.log(req.body.token)
  res.status(200).json('Reset Password Page')
}))

router.post('/logout', tryCatch(async(req, res) => {
  delete req.session.auth
  res.status(204).send()
}))

export default router