const express = require("express");
const database = require('./db');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("Server running on " + port);
});

