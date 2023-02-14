import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/index";
import Login from "@/pages/login/index";

export async function createAppRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
}
