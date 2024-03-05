import express from 'express'
const app = express()
import db from './modules/db.js'
import tryCatch from './modules/tryCatch.js'
import Users from './modules/usersSC.js'
import Cryptr from "cryptr";
const cryptr = new Cryptr("myTotalySecretKey");
import jwt from 'jsonwebtoken'
import checkToken from './middleware/jwt.js'

app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '3mb' }))
app.use(express.static('static'))

app.post('/api/register', tryCatch(async (req, res) => {
  const newUser = req.body.newUser
  const user = await Users.find({email: newUser.email }, 'email')
  if (user.length > 0) {
    if (user[0].email == newUser.email) {
      res.json({ message: 'Bu email kullanılmaktadır' })
    }
  } else {
    const newUsers = new Users({
      user: newUser.user,
      email: newUser.email,
      pass: cryptr.encrypt(newUser.pass),
      credit: newUser.credit,
      creditremain: newUser.credit,
      customercomission: newUser.customercomission,
      usercancelbet: newUser.usercancelbet,
      role: 'Member',
      payment: new Date(),
      settings:{}
    })
   
    await newUsers.save()
    res.json({ code: 200, message: 'Kayıt Başarılı' })
  }
}))

app.post("/api/login", tryCatch(async (req, res) => {
  if (req.body.user) {
    const result = await Users.findOne({ user: req.body.user });
    if (result) {
      if (req.body.pass === String(cryptr.decrypt(result.pass))) {
        if (result.state === "pasif") {
          res.json({ login: "Hesap askıya alınmıştır" });
        } else if (result.fakelogin >= result.logincount) {
          res.json({ login: "Hatalı giriş sınırı!" });
        } else {
          await Users.updateOne({ user: req.body.user },{ logincheck: "active"});
          const token = jwt.sign({dePass}, 'secret')
          res.json({ code: 200, login: "Giriş Başarılı", token:token});
        }
      } else {
        if (result.fakelogin < result.logincount) {
          await Users.updateOne(
            { user: req.body.user },
            { $inc: { fakelogin: + 1 } }
          );
          res.json({ login: "Geçersiz üye" });
        } else {
          res.json({ login: "Hatalı giriş sınırı!" });
        }
      }
    } else {
      res.json({ login: "Geçersiz üye" });
    }
  }
}))

app.get('/api/users', checkToken, tryCatch(async(req, res)  => {
  //get req.token from localstorage
  jwt.verify(req.token, 'secret', async function(err, data) {
    if(err){
      res.sendStatus(403)
    } else {
      const allUsers = await Users.find({})
      res.json({code: '200', users: allUsers})
    }
    
  })
}))
app.use((error, req, res, next) => {
  console.log(error)
})

app.use((req, res)=>{
  res.status(404).send('page not found')
})

app.listen(3000, () => {
  console.log('Server is running...')
})