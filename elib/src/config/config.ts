
import { config as conf } from "dotenv"
conf()

const _config = {
    PORT : process.env.PORT,
    DB_URL: process.env.MONGO_CONN_STRING,
    env: process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET
}

export const config = Object.freeze(_config) // freeze - only read