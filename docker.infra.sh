#!/bin/bash
docker build -t dev-environment .
docker run -it -v $(pwd):/workspace dev-environment #--rm si supprimer le conteneur post 