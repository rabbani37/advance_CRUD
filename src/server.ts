import app from "./app"
import config from "./Config/config.index";


const main = async () => {

    app.listen(config.port, () => {
        console.log(`Server is running  http://localhost:${config.port}`);
    })

}

main()