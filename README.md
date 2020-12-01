# DEVJOB

## Description

API using node.js, nestjs and graphql with a CRUD of job openings.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

```

## Mapped queries
```bash
# Return all jobs
$ query jobs {
  jobs {
    id
    title
    description
    qualifications {
      id
      description
    }
    technologies {
      id
      name
      timeExperience
      description
    }
    responsibilities {
      id
      description
    }
    company {
      id
      name
      legacy
      values {
        id
        description
      }
    }
    remunerations {
      id
      description
      value
    }
    location {
      id
      city
      state
      isRemoteWork
    }
    contact {
      id
      phone
      mail
      whastapp
      linkedin
    }
    recruiter {
      id
      name
    }
    createdAt
    updatedAt
  }
}
```
