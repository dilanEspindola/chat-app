import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { RoutesNotFound } from "@/utils";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/routes";
import { Register } from "@/pages/register";
import { Login } from "@/pages/login";
import { Home } from "@/pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <RoutesNotFound>
        <Route path="/" element={<Navigate to={PUBLIC_ROUTES.REGISTER} />} />
        <Route path={PUBLIC_ROUTES.REGISTER} element={<Register />} />
        <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />

        {/* private routes */}
        <Route path={PRIVATE_ROUTES.HOME} element={<Home />} />
      </RoutesNotFound>
    </BrowserRouter>
  );
};

export default App;
