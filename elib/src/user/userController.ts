import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log("reqdata", req.body);

  // take user info from body
  const { name, email, password } = req.body;

  // validation
  if (!name || !email || !password) {
    // res.json({message: "all fields are required"})
    const error = createHttpError(400, { message: "all fields are required" });
    return next(error);
  }

  // database call
  const user = await userModel.findOne({ email });
  // if user with same email exist, when this condition run
  if (user) {
    const error = createHttpError(400, "user already exist with this email");
    return next(error);
  }

  // hashing password using bcrypt
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is salt(create random string)
  const newUser = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  // token generation
  const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
    expiresIn: "7d",
  });

  res.json({ accessToke: token });
};


export { createUser };
