# Yoda Speak Firebase Function

Sample repository showing how to integrate [Doppler with Firebase](https://docs.doppler.com/docs/enclave-firebase-installation).

## Requirements

- [Doppler CLI](https://docs.doppler.com/docs/enclave-installation)
- Node 16

## Set up

Create the `yodaspeak-firebase` project in Doppler:

[![Import to Doppler](https://raw.githubusercontent.com/DopplerUniversity/app-config-templates/main/doppler-button.svg)](https://dashboard.doppler.com/workplace/template/import?template=https://github.com/DopplerUniversity/yodaspeak-firebase/blob/main/doppler-template.yaml)

Or from a terminal in the root application directory, run:

```sh
doppler import
```

Then install the application dependencies:

```sh
npm install
```

## Secrets

This repository syncs Doppler secrets to [Firebase's environment variables store](https://firebase.google.com/docs/functions/config-env) by running the command:

```sh
npm run secrets-sync
```

Doppler is awesome because secrets are dynamically kept in sync during local development without using insecure and manually maintained `.env` or `.runtimeconfig.json` files.

The `serve` and `shell` commands use the Doppler CLI to provide secrets with the `CLOUD_RUNTIME_CONFIG` environment variable. The format required for local development can be seen by running:

```sh
npm run secrets --silent | jq '{doppler: .}'
```

Secrets are then accessed from the `functions.config().doppler` property:

```js
const functions = require('firebase-functions')
const secrets = functions.config().doppler
```

By using Doppler, you and your teammates will never have out of date secrets again. This makes onboarding new engineers a breeze, plus you don't have to worry about leaking credentials in unprotected text files.

## Local development

Open a terminal and change into the `functions` directory, then configure the Doppler CLI for local development by running:

```sh
doppler setup
```

Start the Firebase functions emulator by running:

```sh
npm run serve
```

Then test the [translation endpoint](http://localhost:5001/yodaspeak-firebase/us-central1/translate?text=Secrets%20must%20not%20be%20stored%20in%20.env%20files).

To launch the Firebase shell, run:

```sh
npm run shell
```

## Production

Deploying to production is a two-step process:

1. [Update your function environment variables](https://firebase.google.com/docs/functions/config-env)
2. Update your function code

Your CI/CD environment will need a [Doppler Service Token](https://docs.doppler.com/docs/service-tokens) injected as the `DOPPLER_TOKEN` environment variable to provide read-only access to the `Production` config.

To deploy your Firebase function with the latest environment secrets from Doppler, simply run:

```sh
npm run deploy
```

Check out the [deploy GitHub Action](./.github/workflows/deploy.yaml) for a full working example.

You can then test production by viewing the [index page](https://us-central1-yodaspeak-firebase.cloudfunctions.net/index), [secrets](https://us-central1-yodaspeak-firebase.cloudfunctions.net/secrets), or [translation endpoint](https://us-central1-yodaspeak-firebase.cloudfunctions.net/translate?text=Secrets%20must%20not%20be%20stored%20in%20.env%20files).
