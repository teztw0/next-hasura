# Docker

## Build

To build your docker images, run the command

    docker-compose build

## Start

At the root level run the command

    docker-compose up

Then

    hasura migrate apply

After that you can access website at [localhost:3000](localhost:3000).

## Hasura console
To open console you should go at /hasura and run cmd

    hasura console

## Stop all running containers

    docker stop $(docker ps -aq)

## Remove all containers

    docker rm $(docker ps -aq)

## Clean all untagged images and unused containers

    docker system prune