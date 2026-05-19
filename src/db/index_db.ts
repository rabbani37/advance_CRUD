import { neon } from "@neondatabase/serverless"
import config from "../Config/config.index"
const sql = neon(config.database_usrl);


export const initDB = async () => {

    await sql`
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(75) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT,
    role VARCHAR(20) NOT NULL DEFAULT user,

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    update_at TIMESTAMP NOT NULL DEFAULT NOW()

    )`;
    console.log('Database connected successfully...');
}