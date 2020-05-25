const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  response.json(blogs.map(u => u.toJSON()))
})

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

blogRouter.post('/', async (request, response) => {
  const { body } = request
  const token = getTokenFrom(request)

  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid'})
  }

  const user = await User.findById(decodedToken.id)

  if (!body.title || !body.author || !body.url) {
    return response.status(400).json({
      error: 'Title, author or url missing',
      content: body,
    })
  }

  const blog = new Blog({
    ...body,
    likes: !body.likes ? 0 : body.likes,
    date: new Date(),
    user: user._id
  })

  const savedBlog = await blog.save()
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()
})

blogRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

blogRouter.put('/:id', async (request, response) => {
  const blog = {
    ...request.body,
    date: new Date()
  }
  
  await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
  response.status(204).end()
})

module.exports = blogRouter
