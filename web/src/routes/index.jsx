import { BrowserRouter } from "react-router-dom";

import { USER_ROLE } from "../utils/role";
import { useAuth } from "../hooks/auth";

import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";
import { SaleRoutes } from "./sale.routes";
import { CostumerRoutes } from "./costumer.routes";
import { useEffect } from "react";
import { api } from "../services/api";

export function Routes() {
  const { user ,signOut} = useAuth();
useEffect(()=> {
  api.get("/users/validated").catch((error)=> {
    if(error.response?.status === 401){

      signOut()

    }
  })


}, [
])


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
