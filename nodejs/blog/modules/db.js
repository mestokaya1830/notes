import Mongoose from 'mongoose'

const db = Mongoose.connect(process.env.MONGO_URL)
.then(() => {console.log('Connected')})
.catch((err) => {console.error(err)})

export default db