const jwt = require('jsonwebtoken')
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const { userExtractor } = require('../utils/middleware')

blogsRouter.get('/', async (_request, response) => {
  const blogs = await Blog.findAll()
    response.json(blogs)
})

blogsRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findByPk(request.params.id)
  if (blog) {
    response.json(blog)
  } else {
    response.status(404).end()
  }
})
//userExtractor
blogsRouter.post('/', async (request, response) => {
  const body = await request.body
  //const decodedToken = jwt.verify(request.token, process.env.SECRET)
  //if (!decodedToken) {
  //  return response.status(401).json({ error: 'token invalid' })
  //}
  //const user = await request.user
  const blog = await Blog.create({
    title: body.title,
    author: body.author,
    url: body.url,
    //user: user.id,
    //likes: body.likes,
    //name: user.name,
  })
  //const savedBlog = await blog.save()
  //user.blogs = user.blogs.concat(savedBlog._id)
  //await user.save()
  response.status(201).json(blog)
})

blogsRouter.delete('/:id', async (request, response) => {
  //const decodedToken = jwt.verify(request.token, process.env.SECRET)
  const blog = await Blog.findByPk(request.params.id)
  blog.destroy()
  response.status(204).end()
})

blogsRouter.put('/:id', async (request, response) => {
  const body = request.body
  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  }
  const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {
    new: true,
  })
  response.status(200).json(updatedBlog)
})

module.exports = blogsRouter
