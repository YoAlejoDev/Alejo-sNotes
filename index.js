const express = require('express');
const path = require('path');
const db = require('./public/javascript/db');
const spawn = require('child_process').spawn;
const cors = require('cors');
const morgan = require('morgan');
const mysql = require('promise-mysql');
const app = express();

app.set('port', 4000);
app.listen(app.get("port"));
console.log("Escuchando comunicaciones del servidor en el puerto " + app.get("port"));

const whiteList = ['http://127.0.0.1:3000']

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Middlewares

const corsOpts = {
  origin: 'http://127.0.0.1:3000',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

const conn = mysql.createConnection({
  host: 'localhost',
  database: 'comentarios',
  user: 'root',
  password: 'root123',
});

const getConnection = async () => conn;

app.use(cors(corsOpts))
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(cors({
  origin: whiteList
}));

// URL'S
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/aboutme', (req, res) => {
    res.render('about');
});

app.get('/projects', (req, res) => {
    res.render('proyectos');
});

app.get('/comments', (req, res) => {
  res.render('comments');
});

app.get("/productos",async (req, res) => {
  const connection = await db.getConnection();

  // Query

  // Get Table

  const resultado = await connection.query("SELECT * FROM comentarios_usuarios");
  console.log(resultado);
  res.json(resultado);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

module.exports = {
  getConnection
};