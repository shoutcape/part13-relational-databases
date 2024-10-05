const authorsRouter = require('express').Router()
const { Blog } = require('../models')
const { sequelize } = require('../models/blog')

authorsRouter.get('/', async (req, res) => {
  const authors = await Blog.findAll({
    attributes: ['author',
      [sequelize.fn('COUNT', sequelize.col('author')), 'blogs'],
      [sequelize.fn('SUM', sequelize.col('likes')), 'likes']],
    group: 'author',
    order: [['likes', 'DESC']]
  })
  res.json(authors)
})

module.exports = authorsRouter
