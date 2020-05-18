require('dotenv').config()
const http = require('http')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const Blog = require('./modules/blog')

morgan.token('body', (req, res) => JSON.stringify(req.body))

//app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :status - :response-time ms :body'))
app.use(cors())

app.get('/api/blogs', (request, response, next) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
    .catch(error => next(error))
})

app.post('/api/blogs', (request, response, next) => {
  const { body } = request

/*   if(!body.title || !body.author || !body.url) {
    return response.status(400).json({
      error: 'Title, author or url missing',
      content: body
    })
  } */

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

const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  // eslint-disable-next-line no-else-return
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})