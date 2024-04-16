import Mongoose from 'mongoose'

const productsSC = new Mongoose.Schema({
  name:{type: String, required: true},
  price:{type: Number, required: true}
})

export default Mongoose.model('products', productsSC)