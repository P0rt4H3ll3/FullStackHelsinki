//This file is an Express router module that defines several routes for interacting with a MongoDB collection using the Mongoose ORM.

const blogsRouter = require('express').Router()
const Blog = require('../models/Blog')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
  const blog = new Blog(request.body)
  if (!blog.url || !blog.title) {
    response.status(400).end()
  }
  if (!blog.likes) blog.likes = 0
  const addedBlog = await blog.save()
  response.status(201).json(addedBlog)
})

module.exports = blogsRouter
