const mysql = require('promise-mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    database: 'comentarios',
    user: 'root',
    password: 'root123',
});

const getConnection = async () => conn;

module.exports = {
    getConnection
};