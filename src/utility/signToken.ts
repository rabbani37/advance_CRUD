
import config from "../Config/config.index";
import type { RUser } from "../types/types";
import jwt from "jsonwebtoken";


export const signToken = (payload: RUser,) => {
    const accessToken = jwt.sign(payload, config.access_secret, { expiresIn: "1d" })
    const refreshToken = jwt.sign(payload, config.refresh_secret, { expiresIn: "7d" })
    return { accessToken, refreshToken }
}