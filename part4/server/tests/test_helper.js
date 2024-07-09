const Blog = require('../models/Blog')

const initialBlogs = [
  {
    title: 'my inital Blog post #1',
    author: 'bananenphil',
    url: 'https://websiteofwonders1.de',
    likes: 3
  },
  {
    title: 'my inital Blog post #2',
    author: 'apfelphil',
    url: 'https://websiteofwonders2.de',
    likes: 56
  },
  {
    title: 'my inital Blog post #3',
    author: 'kiwiphil',
    url: 'https://websiteofwonders3.de',
    likes: 2
  }
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map((note) => note.toJSON())
}

module.exports = {
  initialBlogs,
  blogsInDb
}
