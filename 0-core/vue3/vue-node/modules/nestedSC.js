import mongoose from "mongoose";

const limitSettingsSC = new mongoose.Schema({
  user:{type: String, required: true, default: 'tevye', lovercase: true, trim:true},
  admin:{type: String, required: true, default: 'tevye', trim:true},
  minms:{type: Number, required: true, default: 1, trim:true},
  maxms:{type: Number, required: true, default: 15, trim:true},
  minkm:{type: Number, required: true, default: 5, trim:true},
  maxkm:{type: Number, required: true, default: 1000, trim:true},
  maxrate:{type: Number, required: true, default: 1000, trim:true},
  maxearn:{type: Number, required: true, default: 10000, trim:true},
  cminms:{type: Number, required: true, default: 1, trim:true},
  cmaxms:{type: Number, required: true, default: 15, trim:true},
  cminkm:{type: Number, required: true, default: 5, trim:true},
  cmaxkm:{type: Number, required: true, default: 1000, trim:true},
  cmaxrate:{type: Number, required: true, default: 1000, trim:true},
  cmaxearn:{type: Number, required: true, default: 10000, trim:true}
})
const creditlogsSC = new mongoose.Schema({
  user:{type: String,  lovercase: true, trim:true},
  admin:{type: String,  lovercase: true, trim:true},
  superadmin:{type: String,  lovercase: true, trim:true},
  date:{type: Date,  default: Date.now(), trim:true},
  amount:{type: Number,  trim:true},
  credit:{type: Number,  trim:true},
  creditremain:{type: Number,  trim:true},
  ope:{type: String,  lovercase: true, trim:true},
  des:{type: String,  lovercase: true, trim:true}
})
const gamelogsSC = new mongoose.Schema({
  gameid:{type: Number,  trim:true},
  user:{type: String,  lovercase: true, trim:true},
  admin:{type: String,  lovercase: true, trim:true},
  superadmin:{type: String,  lovercase: true, trim:true},
  date:{type: Date,  default: Date.now(), trim:true},
  amount:{type: Number,  trim:true},
  creditremain:{type: Number,  trim:true},
  ope:{type: String,  lovercase: true, trim:true},
  des:{type: String,  lovercase: true, trim:true}
})
const nested = new mongoose.Schema({
  name:{type:String},
  password:{type:String},
  limitsettings:[limitSettingsSC],
  creditlogs:[creditlogsSC],
  gamelogs:[gamelogsSC],
  created_at:{type: Date, default: Date.now()}
  
})

export default new mongoose.model('users', nested)