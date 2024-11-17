import app from "./src/app";

const startServer = () =>{
    const PORT = process.env.PORT || 4000

    app.listen(PORT, ()=>{
        console.log(`app listen at PORT ${PORT}`)
    })
}

startServer();