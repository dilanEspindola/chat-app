import { Request, Response } from "express";
import { uploadImage, setUser, getAllUsers } from "../services";
import { deleteImage, hashPassword } from "../utils";
import { RegisterType } from "../utils/validations";

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await getAllUsers();

    return res.status(200).json(users);
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
  }
};

export const createUser = async (
  req: Request<unknown, unknown, RegisterType>,
  res: Response
) => {
  try {
    const { username, password, email, fullname } = req.body;
    const uploadImagePromise = uploadImage(req.file?.path!);
    const hashPasswordPromise = hashPassword(password);
    const [photoUrl, passwordHashed] = await Promise.all([
      uploadImagePromise,
      hashPasswordPromise,
    ]);

    const filename = req.file?.filename;
    deleteImage(filename!);

    await setUser({
      fullname,
      username,
      photo: photoUrl,
      email,
      password: passwordHashed!,
    });

    return res.status(200).json({ message: "USER_CREATED" });
  } catch (error: any) {
    console.log(error.message);
    if (error.message.includes("Duplicate entry"))
      return res
        .status(400)
        .json({ message: "username and/or email already exist" });

    return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
  }
};
