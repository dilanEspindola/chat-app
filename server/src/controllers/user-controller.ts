import { Request, Response } from "express";
import { appDataSource } from "../config";
import { User } from "../models";
import { uploadImage } from "../services";

const userRepository = appDataSource.getRepository(User);

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const getUsers = await userRepository.find();
    return res.json(getUsers);
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const photo = await uploadImage(req.file?.path!);
    console.log(photo);

    return res.json({ message: "ok" });
  } catch (error) {
    return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
  }
};
