// Modules and Globals
require('dotenv').config()
// require express
const express = require('express');
// initialize app variable
const app = express();

// Express Settings
app.set('views', _dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Controllers & Routes
app.use('/places', require('./controllers/places'))

// Home Page route
app.get('/', (req, res) => {
  res.render('home')
});

// wildcard route
app.get('*', (req, res) => {
  res.render('error404')
});

// Listen for Connections
app.listen(process.env.PORT);