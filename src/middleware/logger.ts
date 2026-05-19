import type { NextFunction, Request, Response } from "express";


export const logger = (req: Request, res: Response, next: NextFunction) => {
    const log = `Time:[ ${new Date().toLocaleString()} ], Method:[ ${req.method} ], Url:[ ${req.url} ] `;
    ;

    next()
}