import dotenv from 'dotenv';
import { env } from "process"
dotenv.config({ quiet: true })

const config = {
    port: env.PORT,
    database_usrl: env.DATABASE_URL as string,
    node_env: env.NODE_ENV,
    access_secret: env.ACCESS_TOKEN as string,
    access_token_validity: env.ACCESS_TOKEN_VALIDITY as string,
    refresh_secret: env.REFRESH_SECRET as string,
    refresh_token_validity: env.REFRESH_TOKEN_VALIDITY as string
}

export default config;