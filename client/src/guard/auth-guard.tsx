import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "@/utils";
import { PUBLIC_ROUTES } from "@/routes";

export const AuthGuard = () => {
  const token = getToken();

  return token ? <Outlet /> : <Navigate replace to={PUBLIC_ROUTES.LOGIN} />;
};
