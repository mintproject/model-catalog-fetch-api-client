#!/usr/bin/env bash
BINDIR=~/ISI
FILE=~/ISI/model-catalog-oas/model-catalog/servers/openapi.yaml

java -jar $BINDIR/openapi-generator-cli.jar generate \
     -i $FILE \
     -g typescript-fetch \
     -o . \
      -c openapi-config.json \
     --git-repo-id model-catalog \
     --git-user-id mintproject  \
     --template-dir .openapi-generator/template

git checkout -- package.json
