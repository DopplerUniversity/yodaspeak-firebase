const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const config = require('./config')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(router)
app.use(logger(config.LOGGING))

module.exports = app
