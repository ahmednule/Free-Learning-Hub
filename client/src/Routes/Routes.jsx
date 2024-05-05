import { createHashRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

export const  landingRoutes = createHashRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
]);
