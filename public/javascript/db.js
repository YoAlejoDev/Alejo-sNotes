const mysql = require('promise-mysql');

const db_con = mysql.createConnection({
    host: 'localhost',
    database: 'comentarios',
    user: 'root',
    password: 'root123',
});

const conn = async () => db_con;

module.exports = {
    conn
};