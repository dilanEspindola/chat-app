import bcrypt from "bcryptjs";

export const hashPassword = async (
  password: string
): Promise<string | undefined> => {
  try {
    const salt = await bcrypt.genSalt(9);
    const hashPass = await bcrypt.hash(password, salt);
    return hashPass;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (
  password: string,
  hashPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashPassword);
};
