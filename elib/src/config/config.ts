
import { config as conf } from "dotenv"
conf()

const _config = {
    PORT : process.env.PORT,
    DB_URL: process.env.MONGO_CONN_STRING,
    env: process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET,
    cloud_name: process.env.CLOUDINARY_NAME,
    cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
    cloudinary_secret_key: process.env.CLOUDINARY_SECRET_KEY
}

export const config = Object.freeze(_config) // freeze - only read