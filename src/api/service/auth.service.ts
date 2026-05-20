
import { sql } from "../../db/index_db";
import type { RUser, TUser } from "../../types/types";
import bcrypt from "bcrypt"


class AuthService {
    async createUser(user: RUser & { password: string }) {
        const { name, email, password, role, age } = user;
        const hash = await bcrypt.hash(password, 10)
        const result = await sql`
        INSERT INTO users(name, email, password_hash, role, age)
        VALUES(${name}, ${email}, ${hash}, COALESCE(${role}, 'user'), ${age})
        RETURNING id, name, email, role, age
        `;

        return result[0]
    };;

    async validateUser(email: string, password: string) {
        const result = await sql` SELECT id, name, email, password_hash, role, age FROM users WHERE email = ${email}`;
        if (!result.length) {
            return null;
        }
        const { password_hash, ...user } = result[0] as TUser
        const isValidPass = await bcrypt.compare(password, password_hash);
        return isValidPass ? user : null
    }
}



export default new AuthService()