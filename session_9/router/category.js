const express = require('express')
const router = new express.Router()
const categoryModule = require('../modules/category')

router.get('/', categoryModule.findMany)

router.get('/:id', categoryModule.findOne)

router.post('/', categoryModule.create)

router.put('/', categoryModule.update)

router.delete('/:id', categoryModule.delete)

module.exports = router