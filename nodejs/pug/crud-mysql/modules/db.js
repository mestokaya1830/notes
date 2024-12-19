const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'crud'
});

dbConn.connect(err => {
    if (err) throw err;
    console.log('Connected!');
});

module.exports = dbConn