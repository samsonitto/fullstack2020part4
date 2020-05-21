const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', (request, response, next) => {
  Blog
    .find({})
    .then((blogs) => {
      response.json(blogs)
    })
    .catch((error) => next(error))
})

blogRouter.post('/', (request, response, next) => {
  const { body } = request

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
  })

  blog
    .save()
    .then((result) => {
      response.status(201).json(result)
    })
    .catch((error) => next(error))
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
