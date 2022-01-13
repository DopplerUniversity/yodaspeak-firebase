const axios = require('axios')
const cors = require('cors')
const express = require('express')
const config = require('./config')
const log = require('./log')

const router = express.Router()
const PREDEFINED_TRANSLATIONS = {
    'Secrets must not be stored in git repositories': 'Stored in git repositories, secrets must not be',
    'Secrets must not be stored in .env files': 'Stored in .env files, secrets must not be',
}

router.get('/', (req, res) => {
    res.send('Welcome to the Yoda Speak translator. Use the /translate endpoint to perform translations.')
})

router.get('/config', (req, res) => {
    res.json(config)
})

router.get('/healthz', (req, res) => {
    res.send('Healthy, this server is.')
})

router.get('/translate', cors(), (req, res) => {
    const text = req.query.text.trim()
    log('Translate text', text)

    // Predefined translations help showcase the function without requiring an API key
    const predefinedTranslation = PREDEFINED_TRANSLATIONS[text]
    if (predefinedTranslation) {
        res.json({
            text: text,
            translation: predefinedTranslation,
        })
    }

    ;(async () => {
        try {
            const response = await axios.post(config.YODA_TRANSLATE_API_ENDPOINT, `text=${text}`, {
                headers: {
                    'X-Funtranslations-Api-Secret': config.YODA_TRANSLATE_API_KEY,
                },
            })
            res.json({
                text: text,
                translation: response.data.contents.translated,
            })
        } catch (error) {
            console.log(colors.red(`[error]: translation failed: ${error.response.data.error.message}`))
            res.status(500).json({
                text: text,
                error: 'Sorry, am I, as translate your message, I cannot.',
            })
        }
    })()
})

module.exports = router
