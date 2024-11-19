

import express from "express";
import { createBook } from "./bookController";

const bookRouter = express.Router();

// define all routes

bookRouter.post("/register",createBook)



export default bookRouter;