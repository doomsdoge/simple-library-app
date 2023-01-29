const mysql = require('mysql2')

// create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ddd1234',
    database: 'simple_library',
    port: 3306
})

db.connect((err) => {
    if(err) return console.log('Error ' + err.message)
    else console.log('MySQL Connected')
})

module.exports = db