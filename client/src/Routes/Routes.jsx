import { createHashRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Learn from "../Pages/Learn";
import Profile from "../Pages/Profile";

export const  landingRoutes = createHashRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/learn",
    element: <Learn />
  },
  {
    path: '/profile',
    element: <Profile />
  }
]);
