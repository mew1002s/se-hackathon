const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('mike eak')
})

app.get('/hello', function (req, res) {
  res.send('SE')
})

app.listen(3000)