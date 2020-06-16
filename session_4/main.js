// learning nodejs
// 1. require() other file
const { str: myString, str2 } = require('./library')
const { number } = require('./library2')
// const { number } = require('./library2/index')

console.log(myString)
console.log(str2)

console.log(number)
// 2. require() build-in package
const fs = require('fs') // file system

const filePath = './package.json'
// function sync
// const fileContent = fs.readFileSync(filePath, 'utf-8')
// console.log(fileContent)

// function async
// fs.readFile(filePath, 'utf-8', (err, fileContent) => {
//   if(err) {
//     console.log('Read file Error!', err)
//   } else {
//     console.log('File content', fileContent)
//   }
// })

// fs.statSync().isDirectory() // true|false
// fs.statSync().isFile() // true|false
// lay thong tin: fs.stat()
// kiem tra ton tai hayko: fs.exists()
// list file trong thư mục: fs.readdir()
// xoa file: fs.unlink()
// xoa thu muc: fs.rmdir()
// tao thu muc: fs.mkdir()
// ghi file: fs.writeFile()

const os = require('os') // operating system
let platform = os.platform()
console.log(platform)

const path = require('path')

// console.log(__dirname + 'package.json')
console.log(path.join(__dirname, 'package.json'))
console.log(path.resolve(__dirname, '../package.json'))

const crypto = require('crypto') // encode/decode, hash

// hash md5
let str = 'abcxyz' // >> '70fb874a43097a25234382390c0baeb3'
// let str = '123456' // >> 'e10adc3949ba59abbe56e057f20f883e'

let strHashed = hashMd5(str)
console.log('str hashed', strHashed)

function hashMd5(str) {
  return crypto.createHash('md5').update(str).digest('hex')
}

let zlib = require('zlib')
let strSource = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham`
let strZipped = zlib.deflateSync(strSource).toString('base64')
console.log(strSource.length, strZipped.length)
console.log('strZipped', strZipped)

const util = require('util')
// util.isArray()
// util.isUndefined()

// 3. require() installed package
const $ = require('jquery')
console.log($)
const _ = require('lodash')

// 4. open server with express
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello from express server!')
})

app.get('/product', (req, res) => {
  res.json([
    { id: 1, title: 'product 1' },
    { id: 2, title: 'product 2' }
  ])
})
// app.post('/product')
// app.put('/product')
// app.delete('/product')

app.listen(9000, (err) => {
  if(err) {
    console.log('Server open failed!', err)
  } else {
    console.log('Server opened at port 9000!')
  }
})

