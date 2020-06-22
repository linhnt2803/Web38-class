const express = require('express')

const productRouter = new express.Router()
const productHandlers = require('../modules/product')

productRouter.get('/', productHandlers.getMany)

productRouter.get('/:id', productHandlers.getOne)

productRouter.post('/', productHandlers.create)

productRouter.put('/', productHandlers.update)

productRouter.delete('/:id', productHandlers.delete)

module.exports = productRouter