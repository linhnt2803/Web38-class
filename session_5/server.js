// env var
// console.log(process.env)
console.log(process.argv)

// env var
const express = require('express')
const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()
// const port = process.env.PORT || 9000
const port = process.argv[2] || 9000
// middleware
app.use(bodyParser.json())
// app.use(cookieParser('my secret string!'))
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'my secret string',
  cookie: { maxAge: 1000 * 60 * 60 * 6 }
}))

// router + handler
app.get('/', (req, res) => {
  let lastCount = req.session.count
  if(!lastCount) {
    lastCount = 0
  }
  req.session.count = lastCount + 1
  if(req.session.count >= 20) {
    throw new Error('You request too many times!')
  } else {
    res.send('Your request ' + req.session.count + ' times!')
  }
})

app.post('/test', (req, res) => {
  console.log('Request coming with cookie', req.cookies)
  console.log('Request coming with session', req.session)
  res.json({ message: 'hello' })
})

// error handler
app.use((err, req, res, next) => {
  let message = err.message
  let code = 500
  res.status(code)
    .json({ message })
})
// listen
app.listen(port, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('Server listening at port ' + port)
  }
})


// example middleware logger

// app.use((req, res, next) => {
//   // logger
//   let info = `Request comming: '${req.method}', '${req.path}'`
//   console.log(info)
//   next()
// })

// example using cookie to mark request id

// app.get('/', (req, res) => {
//   let reqId = req.cookies.id
//   if(!reqId) {
//     let id = Date.now()
//     res.cookie('id', id)
//   }
//   res.send('Your id is: ' + reqId)
// })