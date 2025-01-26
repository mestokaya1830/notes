import mongoose from "mongoose";

const usersSC = new mongoose.Schema({
  username: {
    type: String, 
    required:[true, 'Name is required'], 
    minlength:['3', 'Name must be more then 3'], 
    maxlength:['255','Name must be less then 255']
  },
  password: {
    type: String, 
    required:[true, 'Password is required'], 
    minlength:['3', 'Password must be more then 3'], 
    maxlength:['255','Password must be less then 255']
  }
})

const users = mongoose.models.users || mongoose.model('users', usersSC)
export default users