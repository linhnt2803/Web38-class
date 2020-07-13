const express = require('express')

const authModule = require('../modules/auth')
const authRouter = new express.Router()

authRouter.post('/sign-in', authModule.signIn)

module.exports = authRouter