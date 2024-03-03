const express = require('express');
const path = require('path');
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
})


// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});