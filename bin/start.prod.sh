#! /bin/bash

# Start the server in development mode
# This script is intended to be run from the root of the project

# Set the environment variables
export COMPOSE_PROFILES=prod;

npm install && npm run build;

# Build the server and start it
docker compose build && docker compose up;
