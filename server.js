const express = require('express');
const morgan = require('morgan');
const db = require('./public/javascript/db');
const cors = require('cors');

const app = express();

app.set('port', 4000);
app.listen(app.get("port"));
console.log("Escuchando comunicaciones del servidor en el puerto " + app.get("port"));

// Middlewares

app.use(morgan("dev"));
app.use(cors({
    origin: ["http://127.0.0.1:3000"]
}));

// API tipo rest

app.get("/productos",async (req, res) => {
    const connection = await db.getConnection();

    // Query

    const resultado = await connection.query("SELECT * FROM comentarios_usuarios");
    console.log(resultado);
    res.json(resultado);
});