const mongoose = require('mongoose')
const Schema = mongoose.Schema

// String, Number, Boolean, Date, Object, Array, ObjectId
const productSchema = new Schema({
  // _id: ObjectId
  title: {
    type: String,
    required: [true, `Yêu cầu 'title'!`],
    unique: true,
  },
  description: String,
  // state: { // 'out-stock', 'in-stock'
  //   type: String,
  //   enum: ['out-stock', 'in-stock']
  // },
  // email: {
  //   type: String,
  //   validate: {
  //     // return true | false | String ~ error message
  //     validator(email) {
  //       let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //       let emailValid = emailRegex.test(email)
  //       if(emailValid) {
  //         return true
  //       } else {
  //         return 'Invalid email!'
  //       }
  //     }
  //   }
  // }
})

module.exports = productSchema