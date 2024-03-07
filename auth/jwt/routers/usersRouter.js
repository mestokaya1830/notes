import express from 'express'
const Router = express.Router()
import Users  from '../modules/usersSchema.js'
import wrapAsync from '../middleware/wrapasync.js'
import jwt from 'jsonwebtoken'
import checkToken from '../middleware/jwt.js'
import Cryptr from 'cryptr'
const cryptr = new Cryptr('secret')

Router.post('/users', checkToken,(req, res) => {
  //get req.token from localstorage
  jwt.verify(req.token, 'secret', async function(err) {
    if(err){
      res.sendStatus(403)
    } else {
      const allUsers = await Users.find({})
      res.json({users: allUsers})
    }
    
  })
})
export default Router