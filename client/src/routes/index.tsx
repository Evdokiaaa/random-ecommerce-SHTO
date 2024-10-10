import App from "@/App";
import AdminDashboard from "@/components/admin/Dashboard";
import AdminFeatures from "@/components/admin/Features";
import AdminOrders from "@/components/admin/Orders";
import AdminProducts from "@/components/admin/Products";
import Auth from "@/components/auth";
import ShopLayout from "@/components/Shop";
import AdminPage from "@/pages/admin";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import NotFound from "@/pages/not-found";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    //TODO ПОТОМ ПОФИКСИТЬ
    path: "/admin",
    element: <AdminPage />,
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "features", element: <AdminFeatures /> },
      { path: "orders", element: <AdminOrders /> },
      { path: "products", element: <AdminProducts /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  //   {
  //     path: "/shop",
  //     element: <ShopLayout />,
  //     children: [
  //       //   { path: "account", element: <AdminDashboard /> },
  //     ],
  //   },
]);
