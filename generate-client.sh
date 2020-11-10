#!/usr/bin/env bash
if [ "$#" -ne 1 ]; then
    echo "WARNING: Missing argument"
    echo "$ bash generate_client.sh [git_ref]"
    REPO_TAG=master
else
    REPO_TAG=$1
fi
GENERATOR_VERSION=v4.1.2
FILE=https://raw.githubusercontent.com/mintproject/model-catalog-api/$REPO_TAG/openapi.yaml
echo "Using openapi ${REPO_TAG}"
echo "Using openapi-generator image ${GENERATOR_VERSION}"
docker run -ti --rm -v ${PWD}:/local openapitools/openapi-generator-cli:$GENERATOR_VERSION \
     generate  \
     -i $FILE \
     -g typescript-fetch \
     -o /local/ \
      -c /local/openapi-config.json \
     --git-repo-id model-catalog \
     --git-user-id mintproject  \
     --template-dir /local/.openapi-generator/template
