import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";

export const schemaValidation =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.issues);

        return res.status(400).json(
          error.issues.map((issue) => ({
            message: issue.message,
          }))
        );
      }

      return res.status(500).json({ message: "unexpected error" });
    }
  };
