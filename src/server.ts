import app from "./app"


const main = async () => {

    app.listen(7000, () => {
        console.log("server is running port on : 6000");
    })

}

main()