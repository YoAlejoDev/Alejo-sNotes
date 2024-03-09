const express = require('express');
const morgan = require('morgan');
const db = require('./public/javascript/db');
const cors = require('cors');
const app = express();

// Inicio del server

app.set('port', 4000);
app.listen(app.get("port"));
console.log("Escuchando comunicaciones del servidor en el puerto " + app.get("port"));

// Variables usables

const whiteList = ['http://127.0.0.1:3000']

// Middlewares

app.use(morgan("dev"));
app.use(cors({
    origin: whiteList
}));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// API tipo rest

app.get("/productos",async (req, res) => {
    const connection = await db.getConnection();

    // Query

    const resultado = await connection.query("SELECT * FROM comentarios_usuarios");
    console.log(resultado);
    res.json(resultado);
});