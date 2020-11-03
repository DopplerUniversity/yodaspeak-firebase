const functions = require('firebase-functions')
const express = require('express')
const app = require('./app')

exports.app = functions.https.onRequest(app)
