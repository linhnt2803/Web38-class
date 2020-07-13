const express = require('express')

const productRouter = require('./product')
const categoryRouter = require('./category')
const authRouter = require('./auth')

const router = new express.Router()

router.use('/api/auth', authRouter)
router.use('/api/product', productRouter)
router.use('/api/category', categoryRouter)

module.exports = router