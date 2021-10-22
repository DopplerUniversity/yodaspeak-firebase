const spawn = require('child_process')
const fs = require('fs')

const sampleConfig = JSON.parse(fs.readFileSync('sample-doppler-secrets.json'))
const envs = ['dev', 'stg', 'prd']

console.log('[info]: Creating yodaspeak-firebase project')
spawn.execSync('doppler projects create yodaspeak-firebase')

console.log('[info]: Setting intial secrets for environments')
envs.forEach(env => {
    console.log(`[info]: Setting secrets for ${env}`)
    Object.keys(sampleConfig).forEach(key => {
        spawn.execSync(`doppler secrets set ${key}=${sampleConfig[key]} --project yodaspeak-firebase --config ${env}`)
    })
})

console.log('[info]: Project set up successfully. Now run `doppler setup` to configure your development environment.')
