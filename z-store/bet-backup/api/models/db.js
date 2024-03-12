const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const db = mongoose.connect('mongodb://mesto:MK1972mk11130113@localhost:27017/bet?authSource=bet',{
  useNewUrlParser:true
}).then(()=>{
  console.log('Connected')
}).catch((err)=>{console.log(err)})

module.exports = db
