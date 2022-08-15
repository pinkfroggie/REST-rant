const router = require('express').Router()

// new
router.get('/new', (req, res) => {
    res.render('places/new')
  })

//   post
  router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
module.exports = router
