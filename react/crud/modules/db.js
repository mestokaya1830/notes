import mysql from 'mysql'

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'MK1972mk11130113',
  database: 'works'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected!');
});

export default db