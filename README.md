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
  - Run gulp first
  - docker build -t "silver-invention-service" .
  - docker run -p 5001:5001 -d -t "silver-invention-service"
  - docker stop $(docker ps -a -q)
  - docker rm $(docker ps -a -q)
  - docker rmi -f $(docker images -q)
- Artilerry
  - artillery run artillery.yml
- Testing
  - Jasmine  


## Needs

- unit testing with coverage
- circleci
- External Configs
- deploy to heroku
- Cloudformation
- Kubernete
- Terraform
- Cassandra / cloud provider
- Neo4J / cloud provider
- deploy to google cloud
- Swagger
- TS Dependency Injection
- Observables
- travisci

Karma is installed only because @types/request needs it
