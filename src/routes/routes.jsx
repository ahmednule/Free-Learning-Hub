import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Html from "../learn/html/Html";
import HtmlLessons from "../learn/html/HtmlLessons";
import AllSubjects from "../pages/AllSubjects";
import CodePlayGround from "../pages/CodePlayGround";
import ProjectContainer from "../projects/html/ProjectContainer";
import Projects from "../pages/Projects";
import HTMLProjects from "../projects/html/HTMLProjects";
import Python from "../learn/python/Python";
import PythonLessons from "../learn/python/PythonLessons";
import ContinueWith from "../pages/ContinueWith";
import Profile from "../pages/Profile";
import ColorPickerConverter from "../pages/ColorPickerConverter";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <ContinueWith />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/code-playground",
    element: <CodePlayGround />
  },
  {
    path: "/color-picker",
    element: <ColorPickerConverter />
  },
  {
    path: "/learn",
    element: <AllSubjects />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/learn/html",
    element: <Html />
  },
  {
    path: "/learn/python",
    element: <Python />
  },
  {
    path: "/projects/html",
    element: <HTMLProjects />
  },
  {
    path: "/projects/python",
    element: ""
  },
  {
    path: "/learn/html/:lesson",
    element: <HtmlLessons />
  },
  {
    path: "/learn/python/:lesson",
    element: <PythonLessons />
  },
  {
    path: "/projects/html/:project",
    element: <ProjectContainer />
  },
  {
    path: "/projects/python/:project",
    element: ""
  }
]);
