require('dotenv').config()
const express = require('express')
const router = require('./controllers/places')
const app = express()


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// controllers & routes
app.use('/places', require('./controllers/places'))
app.get('/', (req, res) => {
  res.render('home')
})
app.get('*', (req, res) => {
  res.render('error404')
}) 

router.get('/new', (req, res) => {
  res.render('places/new')
})


app.listen(process.env.PORT)

