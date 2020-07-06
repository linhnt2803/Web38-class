require('./connect-mongo')
const mongoose = require('mongoose')

// fruits: { name: String, color: String, quantity: Number }
// schema fruits
const MODEL_NAME = 'fruits'
const COLLECTION_NAME = 'fruits'
const fruitSchema = new mongoose.Schema({
  name: String,
  color: String,
  quantity: Number
})

const fruitModel = mongoose.model(MODEL_NAME, fruitSchema, COLLECTION_NAME)

// let fruits = await fruitsModel.find({})
// fruitModel.find()
// fruitModel.findOne()
// fruitModel.create()
// fruitModel.findByIdAndUpdate()
// fruitModel.findByIdAndRemove()

async function test() {
  // get many: filter, limit, skip, sort

  let items = await fruitModel
    .find({
      // name: 'Banana',
      // name: /ba/i
    })
    .sort('-name')
    .skip(3)
    .limit(1)
  console.log(items)
  // get one

  let item = await fruitModel
    // .findOne({ _id: '5ef4b62640823056c057fb2b' })
    .findById('5ef4b62640823056c057fb2b')
  console.log('item find one', item)
  // create

  // let createdItem = await fruitModel.create({
  //   name: 'Mango',
  //   color: 'yellow',
  //   quantity: 11
  // })
  // console.log(createdItem)

  // update
  let itemId = '5ef4b5e9416ad556a56c372f'
  let itemUpdated = await fruitModel.findByIdAndUpdate(
    itemId,
    {
      name: 'Banana updated 100'
    },
    {
      new: true
    }
  )
  console.log('item updated ', itemUpdated)

  // delete
  let itemIdToDelete = '5ef4b5e1771bd5569537b985'
  let itemDeleted = await fruitModel.findByIdAndRemove(
    itemIdToDelete
  )

  console.log('item deleted', itemDeleted)
}

test()