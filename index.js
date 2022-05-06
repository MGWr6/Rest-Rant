// require express
const express = require('express');

// initialize app variable
const app = express();

// Home Page route
app.get('/', (req, res) => {
  res.send('Home Page')
});

app.listen(3000);