import { prisma } from "../../database/prisma";
import { User } from "./user.type";

export const userService = {
    create: async (data: User) => {
        return prisma.user.create({ data })
    },
    findAll: async () => {
        return prisma.user.findMany();
    }
}