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

router.get('/new', (req, res) => {
  res.render('places/new')
})


module.exports = router