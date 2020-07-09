const mongoose = require('mongoose')

const DB_NAME = 'web-38'
const connectionString = `mongodb://localhost:27017/${DB_NAME}`
// const connectionString = `mongodb+srv://common:common123@cluster0-dvsxq.mongodb.net/${DB_NAME}`
// `mongodb+srv://common:common123@cluster0-dvsxq.mongodb.net/web-38?retryWrites=true&w=majority`
mongoose.connect(
  connectionString,
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if(err) {
      console.error('Can not to mongodb!')
      console.error(err)
    } else {
      console.log('Connected to MongoDB!')
    }
  }
)