import { Request, Response } from "express";
import { User } from "./user.type";
import { userService } from "./user.service";

const addUser = async (req: Request, res: Response) => {
    try {
        const { name, lastName, email, password } = req.body;
        const newUser = { name, lastName, email, password }
        const user = await userService.create(newUser)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });

    }
}

const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.findAll();
        res.status(201).json(users)
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
}


export const userController = {
    addUser,
    getUsers

}