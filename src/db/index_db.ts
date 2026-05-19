import { neon } from "@neondatabase/serverless"
import config from "../Config/config.index"
const sql = neon(config.database_usrl);


export const initDB = () => {
    console.log('Database connected successfully...');
}