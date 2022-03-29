const functions = require('firebase-functions')
const secrets = functions.config().doppler

const PREDEFINED_TRANSLATIONS = {
    'Secrets must not be stored in git repositories': 'Stored in git repositories, secrets must not be',
    'Secrets must not be stored in .env files': 'Stored in .env files, secrets must not be',
}

exports.index = functions.https.onRequest(async (req, res) => {
    res.send('Found the Yoda Speak API, you have found.')
})

exports.secrets = functions.https.onRequest(async (req, res) => {
    res.json(secrets)
})

exports.translate = functions.https.onRequest(async (req, res) => {
    const text = req.query.text.trim()

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
            functions.logger.error(`[error]: translation failed: ${error.response.data.error.message}`)
            res.status(500).json({
                text: text,
                error: 'Sorry, am I, as translate your message, I cannot.',
            })
        }
    })()
})
