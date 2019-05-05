const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather.request')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', async (req, res) => {
  const { city } = req.body

  const { weather, error } = await weatherRequest(city)
  console.log('Weather', weather)
  console.log('Error', error)

  res.render('index')
})

app.listen(3000, () => {
  console.log('Server has started on port 3000...')
})