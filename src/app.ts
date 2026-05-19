import express from "express"


const app = express() // create app


// middleware
app.use(express.json())




app.get("/", (req, res) => {
    res.status(200,).json({ message: "This is express project" })
    // res.send("hello")
})










export default app;





