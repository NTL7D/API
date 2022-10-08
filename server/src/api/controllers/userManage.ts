import { Request, Response } from "express";
import prisma from "../config/prisma";

export async function getUsers(req: Request, res: Response): Promise<Response> {
    const getUsers = await prisma.user.findMany();
    return res.json(getUsers);
}

export async function createUser(
    req: Request,
    res: Response
): Promise<Response> {
    const { name, email } = req.body;
    const createUser = await prisma.user.create({
        data: { name: String(name), email: String(email) },
    });
    return res.json({ Message: "Create user successfully", createUser });
}

export async function updateUserEmail(
    req: Request,
    res: Response
): Promise<Response> {
    const id = req.params.id;
    const { email } = req.body;
    const updateUserEmail = await prisma.user.update({
        where: {
            id: Number(id),
        },
        data: {
            email: String(email),
        },
    });
    return res.json({ Message: "Update email successfully", updateUserEmail });
}

export async function deleteUser(
    req: Request,
    res: Response
): Promise<Response> {
    const id = req.params.id;
    const deleteUser = await prisma.user.delete({
        where: {
            id: Number(id),
        },
    });
    return res.json({ Message: "Delete user successfully", deleteUser });
}
