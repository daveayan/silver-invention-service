# silver-invention-service
[![CircleCI](https://circleci.com/gh/daveayan/silver-invention-service.svg?style=svg)](https://circleci.com/gh/daveayan/silver-invention-service)
[![Code Climate](https://codeclimate.com/github/daveayan/silver-invention-service/badges/gpa.svg)](https://codeclimate.com/github/daveayan/silver-invention-service)
[![Test Coverage](https://codeclimate.com/github/daveayan/silver-invention-service/badges/coverage.svg)](https://codeclimate.com/github/daveayan/silver-invention-service/coverage)
[![Issue Count](https://codeclimate.com/github/daveayan/silver-invention-service/badges/issue_count.svg)](https://codeclimate.com/github/daveayan/silver-invention-service)
[![Dependency Status](https://gemnasium.com/badges/github.com/daveayan/silver-invention-service.svg)](https://gemnasium.com/github.com/daveayan/silver-invention-service)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)

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
- Integration tests with Jasmine and Istanbul
  - $ npm run-script cover-start
  - $ npm test
  - $ npm stop
  - $ npm remap-cover-ts

## Wish List / To do

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

## Notes
- Karma is installed only because @types/request needs it
