const { test, after, beforeEach } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const { initialBlogs, blogsInDb } = require('./test_helper')
const Blog = require('../models/Blog')
const { resolve } = require('node:path')

beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(initialBlogs)
})

test('HTTP GET request to the /api/blogs URL, verify JSON format', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('HTTP GET request to the /api/blogs URL, all blogs are returned', async () => {
  const response = await api.get('/api/blogs')
  assert.strictEqual(response.body.length, initialBlogs.length)
})

test('ID property of blog posts', async () => {
  const response = await api.get('/api/blogs')
  const blogs = response.body

  blogs.forEach((blog, index) => {
    assert(blog.id !== undefined, `ID field of ${index} Blog undefined`) //node test runner using assert, legacy using jest and .toBeDefined()
  })
})

test('HTTP POST request, verify that the number increased', async () => {
  const newBlog = {
    title: 'my new blog post',
    author: 'avocadophil',
    url: 'https://websiteofwonders4.de',
    likes: 100
  }
  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')

  const titles = response.body.map((r) => r.title)

  assert.strictEqual(response.body.length, initialBlogs.length + 1)
  assert(titles.includes('my new blog post'))
})

test('add Blog with no likes propperty, likes should be 0', async () => {
  const newBlog = {
    title: 'my without likes blog post',
    author: 'lycheephil',
    url: 'https://websiteofwonders5.de'
  }
  const withoutLikesResponse = await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  //checking the  Response Directly = Unit Testing ?
  //confirms that the server logic adds the like property
  // but the DB is not checked
  assert.strictEqual(withoutLikesResponse.body.likes, 0)

  //Checking DB = Integration Testing ?
  //Ensures that the blog post is actually saved correctly in the database.
  //Involves an extra database query and more lines of code = more complex

  const blogsInDbAtEnd = await blogsInDb()
  const addedBlog = blogsInDbAtEnd.find(
    (blog) => blog.id === withoutLikesResponse.body.id
  )
  assert.strictEqual(blogsInDbAtEnd.length, initialBlogs.length + 1)
  assert.strictEqual(addedBlog.likes, 0)
})

after(async () => {
  await mongoose.connection.close()
})
