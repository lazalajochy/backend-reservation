import { addUser } from "../controller/user.controller";
import { Router } from "express";

const userRoute = Router();

userRoute.get("/", addUser);

export default userRoute