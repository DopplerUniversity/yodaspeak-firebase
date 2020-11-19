# Yoda Speak Firebase Function

A sample application showing how to use [Doppler](https://doppler.com/) to manage config and secrets for Firebase Functions.

## Prequisites

* You're familiar with Firebase Functions and have deployed a function previously
* You're familiar with Doppler, and have installed and authenitcated via the CLI with `doppler login`.
* You've set up a project in Doppler 

## Setup

You can either manually create a new project in the [Doppler Dashboard](https://dashboard.doppler.com/) and configure it locally using the contents of `sample-doppler.json` to populate the initial list of secrets, or you can run the script at `./bin/doppler-project-setup.sh` to have this done for you programatically.

## Local development

> NOTE: These commands are to be fun inside the `functions` directory.

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
