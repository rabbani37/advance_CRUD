import jwt from "jsonwebtoken";
import config from "../Config/config.index"

export const verifyToken = (token: string, type: "access" | "refresh") => {
    const secret = type === "access" ? config.access_secret : config.refresh_secret;
    const decode = jwt.verify(token, secret);
    return decode;
}