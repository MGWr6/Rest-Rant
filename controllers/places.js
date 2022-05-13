const router = require('express').Router();
const places = require('../models/places.js')


router.get('/', (req, res) => {
  res.render('places/index', { places })
})


// Create Route 
router.post("/", (req, res) => {
  console.log(req.body)
  res.send("POST /places")
})

// route for "New" view
router.get('/new', (req, res) => {
  res.render('places/new')
})


module.exports = router