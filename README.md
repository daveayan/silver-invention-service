# silver-invention-service

## Tech Stack
- pm2
  - pm2 start pm2.json
  - pm2 status
  - pm2 stop all
  - pm2 delete all
  - pm2 flush
- Express, REST API endpoints
- Winston for logging
- Typescript
- Docker
  - docker build -t "silver-invention-service" .
  - docker run -p 5001:5001 -d -t "silver-invention-service"
  - docker stop $(docker ps -a -q)
  - docker rm $(docker ps -a -q)
  - docker rmi -f $(docker images -q)

## Needs

- Docker
- Kubernete
- Cloudformation
- Terraform
- Artilerry
- Cassandra / cloud provider
- Neo4J / cloud provider
- deploy to heroku
- deploy to google cloud
- circleci
- travisci
- unit testing with coverage
- Swagger
- TS Dependency Injection
- Observables
- External Configs