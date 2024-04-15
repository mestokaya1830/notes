import Mongoose  from "mongoose";

const db = Mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log('COnnected')
})
.catch((error) => console.log(error))


export default db