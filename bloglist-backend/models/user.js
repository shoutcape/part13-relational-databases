require('dotenv').config()
const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL)

class User extends Model { }

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
  name: {
    type: DataTypes.TEXT,
  },
  passwordHash: {
    type: DataTypes.TEXT,
  },
  blogs: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    defaultValue: []
  },
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'user'
})

//const userSchema = mongoose.Schema({
//    username: {
//        type: String,
//        required: true,
//        unique: true,
//        minlength: 3
//    },
//    name : String,
//    passwordHash: String,
//    blogs: [
//        {
//            type: mongoose.Schema.Types.ObjectId,
//            ref: 'Blog'
//        }
//    ]
//})
//
//userSchema.set('toJSON', {
//    transform: (document, returnedObject) => {
//        returnedObject.id = returnedObject._id.toString()
//        delete returnedObject._id
//        delete returnedObject.__v
//        delete returnedObject.passwordHash        
//    }
//})
//
//const User = mongoose.model('User', userSchema) 

module.exports = User
