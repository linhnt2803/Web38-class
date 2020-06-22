const products = [
  { id: Date.now(), title: 'Xà phòng' },
  { id: Date.now() + 1, title: 'Kem đánh răng' }
]

const handlers = {
  getMany(req, res, next) {
    try {
      res.json(products)
    } catch(err) {
      next(err)
    }
  },
  getOne(req, res, next) {
    try {
      let id = req.params.id
      let item = products.find(p => p.id == id)
      res.json(item)
    } catch(err) {
      next(err)
    }
  },
  create(req, res, next) {
    try {
      let data = req.body
      if(!data.title) {
        throw new Error(`Missing product 'title'!`)
      }

      let item = {
        id: Date.now(),
        title: data.title
      }
      products.push(item)
      res.json(item)
    } catch(err) {
      next(err)
    }
  },
  update(req, res, next) {
    try {
      let data = req.body
      let itemId = data.id
      let title = data.title

      if(!itemId) {
        throw new Error(`Missing product 'id'!`)
      }
      if(!title) {
        throw new Error(`Misssing product 'title'!`)
      }

      let item = products.find(p => p.id == itemId)
      if(!item) {
        throw new Error(`Not found product with id '${itemId}'`)
      }
      item.title = title

      res.json(item)
    } catch(err) {
      next(err)
    }
  },
  delete(req, res, next) {
    try {
      let id = req.params.id

      let itemIndex = products.findIndex(p => p.id == id)
      if(itemIndex < 0) {
        throw new Error(`Not found product with id '${id}'`)
      }
      let item = products.splice(itemIndex, 1)

      res.json(item)
    } catch(err) {
      next(err)
    }
  }
}

module.exports = handlers