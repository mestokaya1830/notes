import express from 'express'
const router = express.Router()
import Users from '../controller/Users.js';

router.post('/adduser', Users.addUser)
router.post('/removeuser/:id', Users.removeUser)

export default router