const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const sumOfAll = blogs.reduce((sum, blog) => sum + blog.likes, 0)
  return sumOfAll
}

module.exports = {
  dummy,
  totalLikes
}
