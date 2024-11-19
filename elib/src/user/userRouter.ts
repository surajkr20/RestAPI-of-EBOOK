
import express from "express";

const userRouter = express.Router();
import { createUser } from "./userController";

// define all routes

userRouter.post("/register",createUser)

userRouter.post("/login",loginUser);


export default userRouter;