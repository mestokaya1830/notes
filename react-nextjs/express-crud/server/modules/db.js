import mysql from 'mysql2'

const db = mysql.createConnection({
  host:'localhost',
  user:'mesto',
  password:'mk1972mk',
  database:'crud'
})

db.connect(err => {
  if(!err){
    console.log('Mysql Connected')
  } else {
    console.log(err)
  }
})

export default db