
import mongoose from "mongoose";
import { config } from "./config";


const dbConnect = async() =>{
    try {

        mongoose.connection.on('connected',()=>{
            console.log("connected successfully to the database")
        })

        mongoose.connection.on('error',(error)=>{
            console.log("error to the connecting database",error)
        })

        await mongoose.connect(config.DB_URL as string)

        
    } catch (error) {
        console.error('database connection failed',error)
        process.exit(1)
    }
}

export default dbConnect