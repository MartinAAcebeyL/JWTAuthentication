require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const OAUTH_SCOPES = ['https://www.googleapis.com/auth/userinfo.profile'];


module.exports = {
    MONGODB_URI,
    PORT,
    OAUTH_SCOPES
}