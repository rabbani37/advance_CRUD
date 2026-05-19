import express, { type Application } from "express"
import { logger } from "./middleware/logger";


const app: Application = express() // create app


// middleware
app.use(express.json())


// router middleware
app.use("api/users", () => { });
app.use(logger)




app.get("/", (req, res) => {
    res.status(200,).json({ message: "This is express project" })
    // res.send("hello")
})










export default app;





