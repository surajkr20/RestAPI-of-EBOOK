
import express, { NextFunction, Request, Response } from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

app.get('/',(req, res, next)=>{
    res.json({message: "welcome to elib api's"})
})

// global http error handlers (always used, end of the all routes)
app.use(globalErrorHandler)

export default app;
