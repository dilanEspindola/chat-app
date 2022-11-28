import { Router } from "express";
import { readdirSync } from "fs";

const router = Router();
const dirname = `${__dirname}`;

const cleanFileName = (filename: string) => {
  const file = filename.split(".").shift();
  return file;
};

readdirSync(dirname).filter((filename) => {
  const cleanName = cleanFileName(filename);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
