const colors = require('colors')

module.exports = (message, type = 'info') => {
    switch (type) {
        case 'info':
            console.log(colors.green(`[info]: ${message}`))
            break
        case 'error':
            console.log(colors.red(`[error]: ${message}`))
            break
        default:
            console.log(colors.green(`[${type}]: ${message}`))
    }
}
