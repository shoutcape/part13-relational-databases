require('dotenv').config()
const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL)

class Blog extends Model { }

Blog.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  author: {
    type: DataTypes.TEXT,
  },
  url: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'blog'
})

//const blogSchema = new mongoose.Schema({
//  url: {
//    type: String,
//    required: true,
//  },
//  title: {
//    type: String,
//    required: true,
//  },
//  author: String,
//  user: {
//    type: mongoose.Schema.Types.ObjectId,
//    ref: 'User',
//  },
//  likes: { type: Number, default: 0 },
//  name: String,
//  comments: {
//    type: Array,
//    default: [],
//  },
//})
//
//blogSchema.set('toJSON', {
//  transform: (document, returnedObject) => {
//    returnedObject.id = returnedObject._id.toString()
//    delete returnedObject._id
//    delete returnedObject.__v
//  },
//})

module.exports = Blog

