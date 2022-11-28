import { DataSource } from "typeorm";
import config from "./default";
import { User } from "../models";

export const appDataSource = new DataSource({
  type: "mysql",
  port: config.DATABASE.DB_PORT,
  host: config.DATABASE.HOST,
  database: config.DATABASE.DB_NAME,
  username: config.DATABASE.DB_USERNAME,
  password: config.DATABASE.DB_PASSWORD,
  synchronize: true,
  logging: true,
  entities: [User],
});
