const functions = require('firebase-functions')

const getConfig = () => {
    // `doppler run` used during development so process environment variables used
    if (process.env.DOPPLER_ENVIRONMENT === 'dev') {
        // Emulate Firebase config behavior of automatically parsing JSON strings to objects
        Object.keys(process.env).forEach(key => {
            try {
                process.env[key] = JSON.parse(process.env[key])
            } catch (e) {}
        })

        return process.env
    }

    // Production default
    return functions.config().env
}

module.exports = getConfig()
