const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

// GET ALL BLOGS
blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  response.json(blogs.map(u => u.toJSON()))
})

// ADD NEW BLOG
blogRouter.post('/', async (request, response) => {
  const { body } = request

  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
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

// DELETE BLOG
blogRouter.delete('/:id', async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid'})
  }
  const blog = await Blog.findById(request.params.id)
  console.log('request token', request.token)
  
  
  console.log('blog.user:', blog.user.toString())
  console.log('decodedToken.id:', decodedToken.id)
  

  if (blog.user.toString() !== decodedToken.id.toString()) {
    return response.status(401).json({ error: "You don't have permission to delete this blog" })
  }

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
