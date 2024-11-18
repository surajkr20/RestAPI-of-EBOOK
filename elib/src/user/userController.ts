import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

    console.log("reqdata",req.body)

    // take user info from body
    const {name, email, password} = req.body

    // validation
    if(!name || !email || !password){
        // res.json({message: "all fields are required"})
        const error = createHttpError(400, {message: "all fields are required"});
        return next(error)
    }

    res.json({message: "user created"})
};

export { createUser };
