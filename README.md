# Yoda Speak Firebase Function

A sample application showing how to use [Doppler](https://doppler.com/) to manage config and secrets for Firebase Functions.

[![Import to Doppler](https://raw.githubusercontent.com/DopplerUniversity/app-config-templates/main/doppler-button.svg)](https://dashboard.doppler.com/workplace/template/import?template=https://github.com/DopplerUniversity/yodaspeak-firebase/blob/main/doppler-template.yaml)

## Requirements

* Familiar with Firebase Functions and have deployed a function previously
- [Doppler CLI](https://docs.doppler.com/docs/enclave-installation)
- Node 16

## Set up

Create the Project in Doppler using this [Doppler import link](https://dashboard.doppler.com/workplace/template/import?template=https%3A%2F%2Fgithub.com%2FDopplerUniversity%2Fyodaspeak-firebase%2Fblob%2Fmain%2Fdoppler-template.yaml) or run `doppler import` from the root of this repository.

## Local development

From the root directory, configure the project and config by running:

```sh
doppler setup -- no-interactive
```

Change change into the `functions` directory to run the remainder of the local development commands.

Install dependencies:

```sh
npm install
```

To run the server:

```sh
npm run functions
```

Test it's working by visiting the [health-check](http://localhost:5001/yodaspeak-firebase/us-central1/app/healthz), [config](http://localhost:5001/yodaspeak-firebase/us-central1/app/config), or [translation endpoint](http://localhost:5001/yodaspeak-firebase/us-central1/app/translate?text=Secrets%20must%20not%20be%20stored%20in%20.env%20files):

## Deployment

Deployment consists of first, updating [config environment variables](https://firebase.google.com/docs/functions/config-env) by fetching the latest version of the secrets from Doppler and updating them in Firebase.

```sh
npm run configure
```

Then redeploying the function to apply the changed configuration:

```sh
npm run deploy
```

Then test it's working in production by visiting the [health-check](https://us-central1-yodaspeak-firebase.cloudfunctions.net/app/healthz), [config](https://us-central1-yodaspeak-firebase.cloudfunctions.net/app/config), or [translation endpoint](https://us-central1-yodaspeak-firebase.cloudfunctions.net/app/translate?text=Secrets%20must%20not%20be%20stored%20in%20.env%20files):
