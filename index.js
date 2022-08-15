require('dotenv').config()
const express = require('express')
const router = require('./controllers/places')
const app = express()


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))

// controllers & routes
app.use('/places', require('./controllers/places'))
app.get('/', (req, res) => {
  res.render('home')
})
app.get('*', (req, res) => {
  res.render('error404')
}) 




app.listen(process.env.PORT)

