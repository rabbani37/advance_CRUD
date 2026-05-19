import { neon } from "@neondatabase/serverless"
import config from "../Config/config.index"
const sql = neon(config.database_usrl);


export const initDB = async () => {

    // create users table
    await sql`  
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(75) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT,
    role VARCHAR(20) NOT NULL DEFAULT 'user',

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    update_at TIMESTAMP NOT NULL DEFAULT NOW()
    )`;

    // create order tables 
    await sql`
    CREATE TABLE IF NOT EXISTS orders(
    id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    quentity INT NOT NULL,
    food TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    update_at TIMESTAMP NOT NULL DEFAULT NOW()
    )`;


    console.log('Database connected successfully...');
}