const functions = require('firebase-functions')
const config = functions.config().env

// Handling nested JSON keys during local development when JSON config comes directly from
if (typeof config.NESTED_JSON === 'string') {
    config.TEST = JSON.parse(config.NESTED_JSON)
}

module.exports = config
