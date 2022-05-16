// Modules and Globals
require('dotenv').config()
// require express
const express = require('express')
// require method-override
const methodOverride = require('method-override')
// initialize app variable
const app = express()

// Express Settings / Middleware
// app.set('views', _dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
// What does this do?
// Remember, when we send data with the POST verb, that data gets encrypted for its trip across the internet. Because it is protected this way while in transit, that makes it extra safe for usernames, passwords, and other sensitive data. However, it also means we will need an extra tool to decrypt that data for us.
app.use(methodOverride('_method'))


// Controllers & Routes
app.use('/places', require('./controllers/places'))

// Home Page route
app.get('/', (req, res) => {
  res.render('home')
});

// Wildcard route
app.get('*', (req, res) => {
  res.render('error404')
});

// Listen for Connections
app.listen(process.env.PORT);