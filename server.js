const path = require('path')
const express = require('express')
const app = express() // create express app

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static('dist'))

app.use((_, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// start express server on port 5050
app.listen(5050, () => {
  console.log('Server started on port 5050')
})
