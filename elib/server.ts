
import app from "./src/app";
import {config} from './src/config/config'

const startServer = () =>{
    const PORT = config.PORT || 4000

    app.listen(PORT, ()=>{
        console.log(`app listen at PORT ${PORT}`)
    })
}

startServer();