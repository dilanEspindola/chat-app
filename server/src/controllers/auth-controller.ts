import { Request, Response } from "express";
import { getUserByEmail } from "../services";
import { comparePassword } from "../utils";
import { LoginType } from "../utils/validations";
import { generateToken } from "../utils";
import { Token } from "../interfaces";

export const login = async (
  req: Request<unknown, unknown, LoginType>,
  res: Response
) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);

    if (!user)
      return res.status(404).json({ message: "USER_NOT_FOUND", auth: false });

    const getPassword = await comparePassword(password, user["password"]);
    if (!getPassword)
      return res.status(401).json({ message: "WRONG_PASSWORD", auth: false });

    const token = generateToken<Token>({
      email: user.email,
      password: user.password,
    });

    const { password: passwordUser, ...rest } = user;

    return res.status(200).json({ token, user: rest, auth: true });
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
  }
};
