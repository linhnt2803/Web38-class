const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const port = 9000
const clientPaths = ['/', '/about', '/about/:id']

const app = express()
const STATIC_PATH = path.resolve(__dirname, '../build')

app.use(cors())
app.use(bodyParser.json())

app.get('/apis/data', (req, res) => res.json({ message: 'hello' }))
clientPaths.map(clientPath => app.use(clientPath, express.static(STATIC_PATH)))

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message || 'Something went wrong!'
  })
})

app.listen(port, (err) => {
  console.log(err || 'Server listen on port ' + port)
})