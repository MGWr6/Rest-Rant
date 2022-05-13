const router = require('express').Router();

router.get('/', (req, res) => {
  let places = [{
    name: 'The Emerald Dragon',
    city: 'Kyoto',
    state: 'JPN',
    cuisines: 'Japanese, Authentic',
    pic: '/images/Green-Restaurant-Design.jpg'
  }, {
    name: 'The Tea House',
    city: 'Kyoto',
    state: 'JPN',
    cuisines: 'Tea, Cafe',
    pic: '/images/Tea-House-Inside.jpg'
  }]
  
  res.render('places/index', { places })
})


// Creat Route 
router.post("/", (req, res) => {
  res.send("POST /places")
})

// route for "New" view
router.get('/new', (req, res) => {
  res.render('places/new')
})


module.exports = router