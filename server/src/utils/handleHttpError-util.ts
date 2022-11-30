import { Response } from "express";

export const handleHttpError =
  (statusCode: number, message: string) => (res: Response) => {
    return res.status(statusCode).json({ message: message });
  };
