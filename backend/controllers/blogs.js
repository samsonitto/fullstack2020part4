const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', (request, response, next) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
    .catch(error => next(error))
})

blogRouter.post('/', (request, response, next) => {
  const { body } = request

  if(!body.title || !body.author || !body.url) {
    return response.status(400).json({
      error: 'Title, author or url missing',
      content: body
    })
  }

  const blog = new Blog({
    ...body,
    date: new Date(),
  })

  console.log("body",body);
  
  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
    .catch(error => next(error))
})

module.exports = blogRouter