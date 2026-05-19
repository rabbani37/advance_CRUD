import type { NextFunction, Request, Response } from "express";
import config from "../Config/config.index";


export const globalError = (error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : "Internal server error",
        stack: config.node_env === "development" ? error.stack : undefined
    })
}