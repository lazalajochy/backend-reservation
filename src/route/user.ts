import { Router } from "express";
import { userController } from "../modules/user/user.controller";

const userRoute = Router();

userRoute.post("/", userController.addUser);
userRoute.get("/", userController.getUsers)

export default userRoute