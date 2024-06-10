import { BrowserRouter } from "react-router-dom";

import { USER_ROLE } from "../utils/role";
import { useAuth } from "../hooks/auth";

import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";
import { SaleRoutes } from "./sale.routes";
import { CostumerRoutes } from "./costumer.routes";

export function Routes() {
  const { user } = useAuth();

  function AcessRoutes() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.COSTUMER:
        return <CostumerRoutes />;
      case USER_ROLE.SALE:
        return <SaleRoutes />;
    }
  }

  return (
    <BrowserRouter>{user ? <AcessRoutes/> : <AuthRoutes />}</BrowserRouter>
  );
}
