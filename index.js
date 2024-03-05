const express = require('express');
const path = require('path');
const db = require('./public/javascript/db');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define the directory where your HTML files (views) are located
app.set('views', path.join(__dirname, 'views'));

// Optionally, you can define a static files directory (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

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

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

// Check if my sql server is active or not
app.get('/getMySqlStatus', (req, res) => {
  database.ping((err) => {
    if (err) return res.status(500).send("My SQL Server is down");

    res.send("My SQL is Active");
  })
})