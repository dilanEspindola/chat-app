import { z } from "zod";

export const registerValidation = z.object({
  body: z.object({
    fullname: z.string({ required_error: "fullname is required" }),
    username: z.string({ required_error: "username is required" }).trim(),
    email: z
      .string({ required_error: "email is required" })
      .email("type a valid email"),
    password: z
      .string({ required_error: "password is required" })
      .min(6, "password must be at least 6 characters"),
  }),
});

export const LoginValidation = z.object({
  body: z.object({
    email: z
      .string({ required_error: "email is required" })
      .email("type a valid email"),
    password: z
      .string({ required_error: "password is required" })
      .min(6, "password must be at least 6 characters"),
  }),
});

export type RegisterType = z.infer<typeof registerValidation>["body"];
export type LoginType = z.infer<typeof LoginValidation>["body"];
