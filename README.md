# Consensys Test UI

## Intro

This is a React application that uses ApolloClient to connect to the GraphQL backend. It's purpose is to allow users to book meeting rooms.

## Setup

1. This frontend is tightly coupled to the [backend api](https://github.com/EdoFoco/consensys-test-api)
2. Create an Auth0 account and configure a client application
3. Create an .env file by copying the .env.example and changing the variables.

## Run

> `npm install`

> `npm start`

## Test

> `npm test -- --coverage --watchAll=false`
