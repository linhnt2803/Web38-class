const userProfileModel = require('./model')
const { signToken, verifyToken } = require('./jwt')

const handlers = {
  async signIn(req, res, next) {
    try {
      // 1. get data { email, password }
      // 2. find user by email
      // 3. validate password
      // 4. gen access token (next session)
      // 5. return user info
      let { email, password } = req.body
      if(!email) {
        throw new Error(`Missing 'email'!`)
      }
      if(!password) {
        throw new Error(`Missing 'password'!`)
      }
      let user = await userProfileModel.findOne({
        email: String(email).toLowerCase().trim()
      })
      
      // { email, password, .., update, populate, delete, toObject }
      let hashPassword = hashMd5(String(password))
      if(!user || hashPassword != user.password) {
        throw new Error(`Wrong email or password!`)
      }
      // sign in success here if no error throw
      let userPayload = user.toObject()

      // gen access token
      delete userPayload.password
      userPayload.accessToken = signToken(userPayload)

      res.json(userPayload)
    } catch(err) {
      next(err)
    }
  },
  validateAccessToken(req, res, next) {
    try {
      let token = req.headers.authorization
      if(!token) {
        throw new Error('Missing token!')
      }
      let payload = verifyToken(token)
      req.user = payload
      next()
    } catch(err) {
      next(err)
    }
  }
}

function hashMd5(string) {
  return require('crypto')
    .createHash('md5')
    .update(string)
    .digest('hex')
}

module.exports = handlers

// create admin user

// let sourcePassword = '123123'
// let hashPassword = require('crypto')
//   .createHash('md5')
//   .update(sourcePassword)
//   .digest('hex')

// let user = {
//   email: 'linhnt28031995@gmail.com',
//   password: hashPassword,
//   fullname: 'Nguyễn Thế Linh',
//   roles: ['admin']
// }

// let item = await userProfileModel.create(user)

// res.json(item)