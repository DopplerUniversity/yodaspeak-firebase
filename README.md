# Yoda Speak Firebase Function

A sample application showing how to use [Doppler](https://doppler.com/) to manage config and secrets for Firebase Functions.

## Prequisites

* You're familiar with Firebase Functions and have deployed a function previously
* You're familiar with Doppler, and have installed and authenitcated via the CLI with `doppler login`.
* You've set up a project in Doppler 

## Setup

You can manually set up the project in the [Doppler Dashboard](https://dashboard.doppler.com/) to creating a new project called `yodaspeak-firebase` and populating the initial list of secrets using `sample-doppler-secrets.json`, or you can do it programatically by running:

```sh
node functions/setup-doppler-project.js
```

## Local development

> NOTE: These commands are to be fun inside the `functions` directory.

Presuming you've created the project with the required secrets, now run `doppler setup` to configure the Doppler CLI for this repo.

To run the server:

```sh
./bin/dev.sh npm run serve
```

To run the shell:

```sh
./bin/dev.sh npm run shell
```

You can check the function is working correctly by opening another terminal, then running:

```sh
npm run test-api-local
```

## Deployment

It's recommended to deploy by running:

```sh
npm run deploy
```

This will fetch the latest version of the secrets from Doppler and set them in Firebase, before then packaging up the function for deployment.
