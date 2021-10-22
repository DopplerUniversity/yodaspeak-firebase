const express = require('express')
const logger = require('morgan')
const config = require('./config')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)
app.use(logger(config.LOGGING))

module.exports = app
