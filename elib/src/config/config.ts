
import { config as conf } from "dotenv"
conf()

const _config = {
    PORT : process.env.PORT,
    DB_URL: process.env.MONGO_CONN_STRING
}

export const config = Object.freeze(_config) // freeze - only read