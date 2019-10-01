#!/usr/bin/env bash
docker run -ti --rm -v ${PWD}:/local openapitools/openapi-generator-cli:v4.1.2 \
     generate  \
     -i https://raw.githubusercontent.com/mintproject/MINT-ModelCatalogIngestionAPI/master/model-catalog-v1.0.0.yaml\
     -g typescript-fetch \
     -o /local/ \
      -c /local/openapi-config.json \
     --git-repo-id MINT-ModelCatalogAPI-client \
     --git-user-id mintproject  \
     --template-dir /local/.openapi-generator/template
