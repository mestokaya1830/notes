import mysql from 'mysql2'

const db = mysql.createConnection({
  host:'localhost',
  user:'mesto',
  password:'mk1972mk',
  database:'works'
})

db.connect(err => {
  if(!err) console.log('Connected')
})

export default db



//with promise
const db = mysql.createPool({
  host:'localhost',
  user:'mesto',
  password: 'mk1972mk',
  database: 'works'
}).promise()

export default db
