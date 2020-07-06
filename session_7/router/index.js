const express = require('express')

const productRouter = require('./product')
const authRouter = require('./auth')

const router = new express.Router()

router.use('/api/auth', authRouter)
router.use('/api/product', productRouter)

module.exports = router