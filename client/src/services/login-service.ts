import axios from "axios";
import { UserLogin, UserLoggedResponse } from "@/interfaces";
import { URL } from "@/utils";

export const loginUser = async <T extends UserLogin>(
  userData: T
): Promise<UserLoggedResponse> => {
  const response = await axios.post(`${URL}/login`, userData);
  const data: UserLoggedResponse = response.data;
  return data;
};
