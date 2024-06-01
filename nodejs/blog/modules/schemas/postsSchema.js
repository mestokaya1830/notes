import Mongoose from 'mongoose'

const PostsSchema = new Mongoose.Schema({
  title: {type:String, required: true},
  commenttext: {type:String, required: true},
  category: {type:String, required: true},
  author: {type:String, required: true},
  date: {type:Date, default: new Date()},
  mainimage: {type:String, required: true},
  comments: {type: Array}
})

export default Mongoose.model('posts', PostsSchema)