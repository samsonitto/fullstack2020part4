const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  let likes = 0
  blogs.forEach(blog => {
    likes += blog.likes
  });

  return likes
}

const favoriteBlog = (blogs) => {
  let favBlog = blogs.reduce((max, blog) => max.likes > blog.likes ? max : blog)

  return favBlog
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}