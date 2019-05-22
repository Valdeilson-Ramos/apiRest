const express = require('express')
const mongoose = require('mongoose')

class App {
  constructor () {
    this.isDev = process.env.NODE_ENV === 'production'
    this.express = express()
    this.database()
    this.middleware()
    this.routes()
  }
  database () {
    mongoose.connect('mongodb://localhost:27017/apiRest', {
      useNewUrlParser: true,
      useCreateIndex: true
    })
  }
  middleware () {
    this.express.use(express.json())
  }
  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
