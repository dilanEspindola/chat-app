import { createContext } from "react";
import { UserLogin, UserLoggedResponse } from "@/interfaces";

interface ContextProps {
  login: (data: UserLogin) => Promise<UserLoggedResponse | undefined>;
}

export const AuthContext = createContext<ContextProps>({} as ContextProps);
