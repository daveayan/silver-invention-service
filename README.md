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
- Integration tests with Jasmine, Istanbul, remap-istanbul
  - $ npm run cover-start
  - $ npm test
  - $ npm stop
  - $ npm run remap-cover-ts

## Docker (Optional)
### Build Instances
- Run gulp first
- docker build -t "silver-invention-service" .
- docker build -t "silver-invention-service/neo4j" docker/neo4j/
- docker build -t "silver-invention-service/elasticsearch" docker/elasticsearch/
- docker build -t "silver-invention-service/cassandra" docker/cassandra/

### Run Instances
- docker run -p 8081:8081 -d -t "silver-invention-service" 
- docker run -p 7474:7474 -p 7373:7373 -p 7687:7687 -d -t "silver-invention-service/neo4j"
- docker run -p 7000:7000 -p 7001:7001 -p 7199:7199 -p 9042:9042 -p 9160:9160 -d -t "silver-invention-service/cassandra"
- docker run -p 9200:9200 -p 9300:9300 -d -t -e ES_JAVA_OPTS='-Xms1g -Xmx1g' silver-invention-service/elasticsearch -E bootstrap.ignore_system_bootstrap_checks=true

### Stop all containers
- docker stop $(docker ps -a -q)

### Delete all containers
- docker rm $(docker ps -a -q)

### Delete all images
- docker rmi -f $(docker images -q)  

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
