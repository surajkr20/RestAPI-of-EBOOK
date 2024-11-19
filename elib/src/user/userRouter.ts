
import express from "express";

const userRouter = express.Router();
import { createUser } from "./userController";
import { loginUser } from "../user/userController"
// define all routes

userRouter.post("/register",createUser)

userRouter.post("/login",loginUser);


export default userRouter;