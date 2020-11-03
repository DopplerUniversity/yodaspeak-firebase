#!/bin/sh

echo '[info]: Creating project'
doppler projects create yodaspeak-firebase

echo '[info]: Configuring Doppler development environment'
doppler setup --project yodaspeak-firebase --config dev

echo '[info]: Populating secrets'
doppler secrets set --project yodaspeak-firebase --config dev DEBUG="yodaspeak:*" LOGGING="dev" NODE_ENV="development" RATE_LIMITING_ENABLED="false" YODA_TRANSLATE_API_ENDPOINT="https://api.funtranslations.com/translate/yoda.json" YODA_TRANSLATE_API_KEY=""
