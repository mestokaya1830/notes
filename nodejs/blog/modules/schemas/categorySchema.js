import Mongoose from 'mongoose'

const CategorySchema = new Mongoose.Schema({
  name: {type:String, required: true}
})

export default Mongoose.model('categories', CategorySchema)