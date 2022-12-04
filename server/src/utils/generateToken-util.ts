import jwt from "jsonwebtoken";
import { defaultConfig } from "../config";
import { Token } from "../interfaces";

export function generateToken<T extends Token>(payload: T): string {
  const token = jwt.sign(payload, defaultConfig.TOKEN.TOKEN_KEY);
  return token;
}

export function verifyToken() {}
