const mysql = require("mysql");

let db_con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
});

db_con.connect((err) => {
    if (err) {
        console.log("Data connection failed, err: " + err);
    } else {
        console.log("Connected to Database");
    }
})

module.exports = db_con;