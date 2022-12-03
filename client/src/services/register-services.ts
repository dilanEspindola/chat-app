import axios from "axios";
import { FormData as RegisterInterface } from "@/interfaces";
import { URL } from "@/utils";

export const registerUser = async (data: RegisterInterface) => {
  const formData = new FormData();
  formData.append("fullname", data.fullname);
  formData.append("username", data.username);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("photo", data.photo);

  try {
    const res = await axios.post(`${URL}/user`, formData);
    const data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
