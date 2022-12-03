import { config } from "dotenv";
config();

export default {
  DATABASE: {
    DB_PORT: <number | undefined>process.env.DB_PORT,
    DB_NAME: <string>process.env.DB_NAME,
    DB_USERNAME: <string>process.env.DB_USERNAME,
    DB_PASSWORD: <string>process.env.DB_PASSWORD,
    HOST: <string>process.env.HOST,
  },
  CLOUDINARY: {
    CLOUD_NAME: <string>process.env.CLOUD_NAME,
    API_KEY: <string>process.env.API_KEY,
    API_SECRET: <string>process.env.API_SECRET,
  },
  TOKEN: {
    TOKEN_KEY: <string>process.env.TOKEN_SECRET,
  },
};
