import { createHashRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Learn from "../Pages/Learn";
import Profile from "../Pages/Profile";
import Register from "../Components/Modules/Register";

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
    path: "/learn/register/:lessonID",
    element: <Register />
  },
  {
    path: '/profile',
    element: <Profile />
  }
]);
