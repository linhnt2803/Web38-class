const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, `Yêu cầu 'title'!`],
    unique: true,
  },
  description: String,
  categories: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'categories'
    }
  ]
})

module.exports = productSchema