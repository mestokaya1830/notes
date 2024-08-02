import mysql from 'mysql2'

//with promise and run query as async await
// import mysql from 'mysql2'

// const db = mysql.createPool({
//   host:'localhost',
//   user:'mesto',
//   password:'mk1972mk',
//   database:'blog'
// }).promise()


// export default db

// const result = await Mysql.query('Insert Into users(username, email, password)Values(?,?,?)',[username, email, cryptr.encrypt(password)])
//   console.log(result)


// with this rrun query as callbak
// const db = mysql.createConnection({
//   host:'localhost',
//   user:'mesto',
//   password:'mk1972mk',
//   database:'blog'
// })

// db.connect(err => {
//   if(!err) console.log('Mysql Connected')
// })

// export default db

// Mysql.query('Insert Into users(username, email, password)Values(?,?,?)',[username, email, cryptr.encrypt(password)], (err, res) => {
//   console.log(res)
// })

-----------------------------------------------------
app.use(session({
  secret:'secret',
  resave: false,
  saveUninitialized: true,
  rolling: true,
  cookie: {
    maxAge: 36000,
    httpOnly: false,
    secure: true
  },
  store: new MysqlStore({
        host: 'localhost',// Host name for database connection.
  	port: 3306,// Port number for database connection.
  	user: 'session_test',// Database user.
  	password: 'password',// Password for the above database user.
  	database: 'session_test',// Database name.
  	checkExpirationInterval: 900000,// How frequently expired sessions will be cleared; milliseconds.
  	expiration: 86400000,// The maximum age of a valid session; milliseconds.
  	createDatabaseTable: true,// Whether or not to create the sessions database table, if one does not already exist.
  	connectionLimit: 1,// Number of connections when creating a connection pool
	  schema: {
	      tableName: 'sessions',
	      columnNames: {
		  session_id: 'session_id',
		  expires: 'expires',
		  data: 'data'
	      }
	  }
  	})
}))


