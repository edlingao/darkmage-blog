#! /bin/bash

# Start the server in development mode
# This script is intended to be run from the root of the project

# Set the environment variables
export COMPOSE_PROFILES=dev;

# Build the server
docker compose build;

# Start the server
docker compose up;
