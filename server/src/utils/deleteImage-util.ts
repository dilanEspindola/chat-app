import fs from "fs";

export const deleteImage = (filename: string): void => {
  fs.unlink(`src/uploads/${filename}`, (err) => {
    if (err) console.log("file could not be deleted");
    console.log("file deleted");
  });
};
