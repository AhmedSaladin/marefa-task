# Task Descrption

build a reporting API.
The reporting API exposes four endpoints as the following:

- [x] Get user logins in a specific period
- [x] Get the most active users.
- [x] Get the most enrolled categories.
- [x] Get a list of courses by the tag name.
- [x] Make sure to secure your routes as the admins only have the permission to access these routes.
- [x] write a middleware to log HTTP requests in the application. It must contain the
      response status code, request path and time taken to process the request server-side.

## Project files structure

        |---component     contain all app components
        |---configs       contain db and loggers configurations
        |---docs          contain all api docs
        |---middlewares   contain all customized middlewares
        |---utility       contain error and status codes helpers

## Component structure

        |--- controller         gateway from request to business logic
        |--- model              contain component database model
        |--- router             contain all component routes
        |--- repository         contain all database logic
        |--- service            contain all business logic
        |--- validation.schema  contain all validation schema for component

## Project flow

    Request---->middlewares--->controller--->service--->repository

## Enviroment varibales

`MONGODB_URL` : Database connection url

`NODE_ENV` : Project enviroment
