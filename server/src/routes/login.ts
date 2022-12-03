import { Router } from "express";
import { login } from "../controllers";
import { schemaValidation } from "../middlewares";
import { LoginValidation } from "../utils/validations";

const router = Router();

router.post("/", schemaValidation(LoginValidation), login);

export { router };
