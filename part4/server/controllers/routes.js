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

blogsRouter.get('/:id', async (request, response) => {
  const indivitualBlog = await Blog.findById(request.params.id)
  response.json(indivitualBlog)
})

blogsRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndDelete(request.params.id)
  response.status(204).end()
})

blogsRouter.put('/:id', async (request, response) => {
  const body = request.body

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  }
  const blogToUpdate = await Blog.findByIdAndUpdate(request.params.id, blog, {
    new: true
  })
  response.json(blogToUpdate)
})

module.exports = blogsRouter
