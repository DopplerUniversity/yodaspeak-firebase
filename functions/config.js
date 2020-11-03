const functions = require('firebase-functions')

const logTable = (name, obj) => {
    let table = []
    Object.keys(obj).forEach(key => table.push({ KEY: key, VALUE: obj[key] }))
    console.log(`### ${name} ###`)
    console.table(table)
}

const get = key => {
    return process.env.NODE_ENV === 'production' ? functions.config().doppler[key] : process.env[key]
}

const config = Object.freeze({
    DEBUG: get('DEBUG'),
    LOGGING: get('LOGGING'),
    YODA_TRANSLATE_API_ENDPOINT: get('YODA_TRANSLATE_API_ENDPOINT'),
    YODA_TRANSLATE_API_KEY: get('YODA_TRANSLATE_API_KEY'),
    RATE_LIMITING_ENABLED: get('RATE_LIMITING_ENABLED') === 'true' ? true : false,
})

logTable('APP CONFIG', config)

module.exports = config
