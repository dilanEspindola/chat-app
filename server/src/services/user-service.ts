import { Repository } from "typeorm";
import { appDataSource } from "../config";
import { User } from "../models";
import { User as UserInterface } from "../interfaces";

const userRepository = appDataSource.getRepository(User);

export const getAllUsers = async (): Promise<User[]> => {
  const users = await userRepository.find();
  return users;
};

export const setUser = async (data: UserInterface): Promise<void> => {
  const newUser = userRepository.create(data);
  await userRepository.save(newUser);
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const getUser = await userRepository.findOneBy({ email });
  return getUser;
};
