import { useContext } from "react";
import { AuthContext } from "@/auth";

export const useAuth = () => {
  const { login } = useContext(AuthContext);

  return { login };
};
