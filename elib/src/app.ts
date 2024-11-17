
import express, { NextFunction, Request, Response } from "express";
import globalErrorHandler from "./middlewares/GlobalErrorHandler";
import createHttpError from "http-errors";

const app = express();

app.get('/',(req, res, next)=>{
    const error = createHttpError(400, "something went wrong")
    throw error
    res.json({message: "welcome to elib api's"})
})

// global http error handlers (always used, end of the all routes)
app.use(globalErrorHandler)

export default app;
