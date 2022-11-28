import { v2 as cloudinary, UploadApiOptions } from "cloudinary";
import { defaultConfig } from "../config";

cloudinary.config({
  api_key: defaultConfig.CLOUDINARY.API_KEY,
  api_secret: defaultConfig.CLOUDINARY.API_SECRET,
  cloud_name: defaultConfig.CLOUDINARY.CLOUD_NAME,
  secure: true,
});

export const uploadImage = async (image: string) => {
  const options: UploadApiOptions = {
    use_filename: true,
    upload_preset: "chat-app",
    unique_filename: true,
  };

  try {
    const result = await cloudinary.uploader.upload(image, options);
    return result.secure_url;
  } catch (error: any) {
    throw new Error(error);
  }
};
