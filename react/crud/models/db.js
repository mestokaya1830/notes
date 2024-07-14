import mysql from 'mysql2'

const con = mysql.createPool({
  host: 'localhost',
  user: 'mesto',
  password: 'mk1972mk',
  database: 'works'
}).promise()

export default con