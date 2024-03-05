const mysql = require('mysql2');

let db_con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

db_con.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to DB!");
    }
});

module.exports = db_con;