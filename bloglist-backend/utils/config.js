require('dotenv').config()

const PORT =  process.env.PORT

const DATABASE_URL =  process.env.DATABASE_URL

const MONGODB_URI = process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI

module.exports = {
    MONGODB_URI,
    PORT,
    DATABASE_URL
}
