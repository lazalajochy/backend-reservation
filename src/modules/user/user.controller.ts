import { Request, Response } from "express";
import { User } from "./user.type";
import { userService } from "./user.service";
import logger from "../../utils/logger";

const addUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, lastName, email, password } = req.body;

        const requiredFields = ["name", "lastName", "email", "password"];
        const missingFields = requiredFields.filter(field => !req.body[field]);
        if (missingFields.length) {
            res.status(400).json({
                success: false,
                message: `Missing required fields: ${missingFields.join(", ")}`,
            });

            return;
        }

        const existingUser = await userService.findByEmail(email);
        if (existingUser) {
            res.status(409).json({
                success: false,
                message: "Email already in use, please use a different email"
            });
            return;
        }

        const newUser: User = { name, lastName, email, password };
        const createdUser = await userService.create(newUser);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: createdUser,
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        logger.error("Error creating user", { message, body: req.body });
        res.status(500).json({
            success: false,
            message: "Internal server error while creating user",
        });
    }
};

const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: User[] = await userService.findAll();

        res.status(200).json({
            success: true,
            count: users.length,
            data: users,
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        logger.error("Error fetching users", { message });
        res.status(500).json({
            success: false,
            message: "Internal server error while fetching users",
        });
    }
};


export const userController = {
    addUser,
    getUsers,
};
