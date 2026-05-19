import app from "./app"
import config from "./Config/config.index";
import { initDB } from "./db/index_db";


const main = async () => {
    initDB()
    app.listen(config.port, () => {
        console.log(`Server is running  http://localhost:${config.port}`);
    })

}

main()