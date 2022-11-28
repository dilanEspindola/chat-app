import { Router } from "express";
import { getUsers, createUser } from "../controllers";
import { schemaValidation } from "../middlewares";
import { registerValidation } from "../utils/validations";
import { upload } from "../utils";

const router = Router();

router.get("/", getUsers);
router.post(
  "/",
  upload.single("photo"),
  schemaValidation(registerValidation),
  createUser
);

export { router };
