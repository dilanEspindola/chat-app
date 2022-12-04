import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { RoutesNotFound } from "@/utils";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/routes";
import { Register } from "@/pages/register";
import { Login } from "@/pages/login";
import { Home } from "@/pages/home";
import { AuthProvider } from "@/auth";
import { AuthGuard } from "@/guard";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RoutesNotFound>
          <Route path="/" element={<Navigate to={PRIVATE_ROUTES.HOME} />} />
          <Route path={PUBLIC_ROUTES.REGISTER} element={<Register />} />
          <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />

          {/* private routes */}
          <Route element={<AuthGuard />}>
            <Route path={PRIVATE_ROUTES.HOME} element={<Home />} />
          </Route>
        </RoutesNotFound>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
