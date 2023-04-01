import { Outlet, Navigate } from "react-router-dom";
import { Routes } from "./constants/user.routes";
import DashboardLayout from "./layouts/Dashboard/DashboardLayout";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Inventory } from "./pages/Inventory";
import { Access } from "./pages/Access";
import { AllotedAsset } from "./pages/AllotedAsset";
import Users from "./pages/Users/Users";
export const userRoutes = (token: string) => [
  {
    element: !token ? <Outlet /> : <Navigate to={Routes.DASHBOARD} />,
    children: [
      {
        path: Routes.LOGIN,
        element: <Login />,
      },
    ],
  },
  {
    element: token ? <DashboardLayout /> : <Navigate to={Routes.LOGIN} />,
    children: [
      {
        path: Routes.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: Routes.INVENTORY,
        element: <Inventory />,
      },
      {
        path: Routes.ACCESS,
        element: <Access />,
      },
      {
        path: Routes.USERS,
        element: <Users />,
      },
      {
        path: Routes.ALLOTED,
        element: <AllotedAsset />,
      },
    ],
  },
];
