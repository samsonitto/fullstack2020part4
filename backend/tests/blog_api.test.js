const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blog')

beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(helper.initialBlogs)  
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('there are six notes', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body).toHaveLength(helper.initialBlogs.length)
})

test('defining id', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body[0].id).toBeDefined();
})

test('adding new blog', async () => {
  const newObject = {
    title: "new blog post",
    author: "some dude",
    url: "https://lol.com",
    likes: 199,
    date: new Date()
  }

  await api
    .post('/api/blogs')
    .send(newObject)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtTheEnd = await helper.blogsInDb()
  expect(blogsAtTheEnd).toHaveLength(helper.initialBlogs.length + 1)

  const titles = blogsAtTheEnd.map(b => b.title)
  expect(titles).toContain('new blog post')
})

afterAll(() => {
  mongoose.connection.close()
})