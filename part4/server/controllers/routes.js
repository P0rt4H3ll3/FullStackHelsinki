//This file is an Express router module that defines several routes for interacting with a MongoDB collection using the Mongoose ORM.

const blogsRouter = require('express').Router()
const Blog = require('../models/Blog')

blogsRouter.get('/', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
})

blogsRouter.post('/', (request, response, next) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then((result) => {
      response.status(201).json(result)
    })
    .catch((error) => next(error))
})

module.exports = blogsRouter
