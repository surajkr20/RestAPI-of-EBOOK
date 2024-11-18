
import app from "./src/app";
import {config} from './src/config/config'
import dbConnect from "./src/config/db";

const startServer = async() =>{
    // connecting to the database
    await dbConnect();

    const PORT = config.PORT || 4000

    app.listen(PORT, ()=>{
        console.log(`app listen at PORT ${PORT}`)
    })
}

startServer();

