//This file is an Express router module that defines several routes for interacting with a MongoDB collection using the Mongoose ORM.

const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getTokenFrom = (request) => {
  const authorization = request.get('authorization')
  console.log('this is authorization :', authorization)
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '')
  }
  return null
}

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
  const body = request.body

  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET)
  if (!decodedToken.id) {
    return response.status(400).json({ error: 'token invalid' })
  }

  const user = await User.findById(decodedToken.id)
  const blog = new Blog({
    ...request.body,
    user: user.id
  })
  if (!blog.url || !blog.title) {
    response.status(400).end()
  }
  if (!blog.likes) blog.likes = 0

  const addedBlog = await blog.save()
  user.blogs = user.blogs.concat(addedBlog._id) // user.blogs is the array of blogs the user has posted, the just posted blog id is added using concat or spread operator to generat new array, does not change existing array
  await user.save()

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
