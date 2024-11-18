
import express, { NextFunction, Request, Response } from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";

import userRouter from "./user/userRouter"

const app = express();
app.use(express.json())

app.get('/',(req, res, next)=>{
    res.json({message: "welcome to elib api's"})
})

// defining global endpoints
app.use('/api/user', userRouter)

// global http error handlers (always used, end of the all routes)
app.use(globalErrorHandler)

export default app;
