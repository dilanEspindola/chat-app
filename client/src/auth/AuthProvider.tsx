import { AxiosError } from "axios";
import { AuthContext } from "./AuthContext";
import { UserLogin } from "@/interfaces";
import { loginUser } from "@/services";
import { loadingNofication, updateNotification, saveUserInfo } from "@/utils";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: Props) => {
  const login = async (data: UserLogin) => {
    const id = loadingNofication();
    try {
      const info = await loginUser(data);
      saveUserInfo(info);

      console.clear();

      return info;
    } catch (error) {
      if (error instanceof AxiosError) {
        updateNotification(id, error.response?.data.message, "error");
        return;
      }
      console.log((error as any).message);
    }
  };

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
};
