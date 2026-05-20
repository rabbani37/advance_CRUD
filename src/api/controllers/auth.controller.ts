import type { Request, Response } from "express";
import authService from "../service/auth.service";
import { sendResponse } from "../../utility/sendResponse";
import { signToken } from "../../utility/signToken";


const signup = async (req: Request, res: Response,) => {
    const user = await authService.createUser(req.body);
    console.log(user);
    if (!user) {
        sendResponse(res, { message: "Failed to create user" }, 404)
        return
    }
    sendResponse(res, { message: "Successfully Create User", data: user }, 201)
};;

const login = async (req: Request, res: Response,) => {
    const { email, password } = req.body

    // get user from db then check password validity
    const user = await authService.validateUser(email, password) 
    if (!user) {
        return sendResponse(res, { message: "Invalid email or password" }, 401)
    }

    // token generate
    const { accessToken, refreshToken } = signToken(user);

    // generate cookie
    res.cookie("refreshCookie",refreshToken,{sameSite:"lax", httpOnly:true,secure:false})
    
    const data = {
        user,
        accessToken,
        refreshToken
    }
    return sendResponse(res, { message: "User Login Successfully", data: data })
};;



export const authController = {
    signup,
    login
}