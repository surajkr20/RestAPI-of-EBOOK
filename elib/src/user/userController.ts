import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { User } from "./UserTypes";

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
  try {
    const user = await userModel.findOne({ email });
    // if user with same email exist, when this condition run
    if (user) {
      const error = createHttpError(400, "user already exist with this email");
      return next(error);
    }
  } catch (error) {
    return next(createHttpError(500, "Error while getting user"));
  }

  // hashing password using bcrypt
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is salt(create random string)

  let newUser: User; // import User from UserTypes
  try {
    newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    return next(createHttpError(500, "error while creating user"));
  }

  try {
    // token generation
    const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
      expiresIn: "7d",
    });

    res.status(201).json({ 'accessToken': token });

  } catch (error) {
    return next(createHttpError(500, 'Error while signing jwt token'))
  }
};



export { createUser };
