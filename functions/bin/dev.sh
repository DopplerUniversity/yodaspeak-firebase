#!/usr/bin/env bash

# Simple helper script to use the config from Doppler when developing locally
# usage: ./bin/dev.sh npm run serve
# usage: ./bin/dev.sh npm run shell

echo "[info]: Saving Doppler config to .runtimeconfig.json"
echo "{ \"env\": $(doppler secrets download --project yodaspeak --config dev_firebase --no-file) }" > .runtimeconfig.json

# TODO: This is probably the wrong way to do it. Exit cleanly from SIGINT
echo "[info]: Running \"$@\""
eval "$@"

echo "[info]: Deleting .runtimeconfig.json"
rm -f .runtimeconfig.json
