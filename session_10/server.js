require('./connect-mongo')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')

const app = express()
const port = 9000

app.use(bodyParser.json())

app.use(router)

app.use((err, req, res, next) => {
  let message = err.message
  let stack = err.stack
  res.status(400)
    .json({ message, stack })
})

app.listen(port, (err) => console.log(err || 'Server open at port ' + port))
