import mongoose from 'mongoose'

const db = mongoose.connect('mongodb://mesto:MK1972mk11130113@localhost:27017/bet?authSource=bet')
.then(() => {
  console.log('Connected')
}).catch(() => {
  console.log("error")
})

export default db