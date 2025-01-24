import mongoose from "mongoose";

const db = mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Connected with Promise'))
.catch((err) => console.log(err))

export default  db