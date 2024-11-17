import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/config";

console.log(config.env)

const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    message,
    errStack: config.env === "development" ? err.stack : "",
  });
};

export default globalErrorHandler;
