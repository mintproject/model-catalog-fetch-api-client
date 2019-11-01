#!/usr/bin/env bash
REPO_TAG=$1
FILE=https://raw.githubusercontent.com/mintproject/model-catalog-api/$REPO_TAG/openapi.yaml
docker run -ti --rm -v ${PWD}:/local openapitools/openapi-generator-cli:v4.1.2 \
     generate  \
     -i $FILE \
     -g typescript-fetch \
     -o /local/ \
      -c /local/openapi-config.json \
     --git-repo-id model-catalog \
     --git-user-id mintproject  \
     --template-dir /local/.openapi-generator/template
