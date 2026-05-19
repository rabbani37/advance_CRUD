import express from "express"
import usersController from "./module/users/users.controller"


const app = express() // create app


// middleware
app.use(express.json())


// router middleware
app.use("api/users", () => { })




app.get("/", (req, res) => {
    res.status(200,).json({ message: "This is express project" })
    // res.send("hello")
})










export default app;





