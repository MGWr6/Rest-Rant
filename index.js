require('dotenv').config()
// require express
const express = require('express');
// initialize app variable
const app = express();

app.use('/places', require('./controllers/places'))

// Home Page route
app.get('/', (req, res) => {
  res.render('home')
});

// wildcard route
app.get('*', (req, res) => {
  res.status(404).send('<h1>404 Page</h1>')
});


app.listen(process.env.PORT);