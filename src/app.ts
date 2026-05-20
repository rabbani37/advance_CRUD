import express, { type Application } from "express"
import { logger } from "./middleware/logger";
import { globalError } from "./middleware/globalError";
import router from "./api/routers/auth.router";
import cookieParser from "cookie-parser"

const app: Application = express() // create app


// middleware
app.use(express.json())
app.use(cookieParser())
app.use(logger)


// router middleware
app.use(router);






app.get("/", (req, res) => {
    // throw Error("Global Root Error")
    res.status(200,).json({ message: "This is express project" })
    // res.send("hello")
})









app.use(globalError)
export default app;





