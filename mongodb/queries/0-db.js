import mongoose from "mongoose"

const db = mongoose.connect('mongodb://firm:mk1972mk@localhost:27017/works?authSource=firm')
.then(() => console.log('Connected'))
.catch((err) => console.log(err))
export default  db
