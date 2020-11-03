# Yoda Speak Firebase Function

A sample application showing how to use [Doppler](https://doppler.com/) to manage config and secrets for Firebase Functions.

## Prequisites

* You're familiar with Firebase Functions and have deployed a function previously
* You're familiar with Doppler, and have installed and authenitcated via the CLI with `doppler login`.

## Setup

You can either manually create a new project in the [Doppler Dashboard](https://dashboard.doppler.com/) and configure it locally using the contents of `sample-doppler.json` to populate the initial list of secrets, or you can run the script at `./bin/doppler-project-setup.sh` to have this done for you programatically.

## Local development

Change into the `functions` directory, then to ensure Doppler is configured correctly, run:

```sh
doppler secrets download --config dev --no-file --format env
```

During local developmentment, config is set via environment variables so as not to save secrets unencrypted to the file system.

To start the emulator to preview the function locally, run:

```sh
npm run serve
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
