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

// Define a route to render the HTML file
app.get('/', (req, res) => {
  res.render('index'); // Assuming you have an "index.ejs" file in the "views" directory
});

app.get('/aboutme', (req, res) => {
    res.render('about');
});

app.get('/projects', (req, res) => {
    res.render('proyectos');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});