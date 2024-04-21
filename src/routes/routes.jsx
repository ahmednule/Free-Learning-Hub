import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Html from "../learn/html/Html";
import HtmlLessons from "../learn/html/HtmlLessons";
import AllSubjects from "../pages/AllSubjects";
import CodePlayGround from "../pages/CodePlayGround";
import ProjectContainer from "../projects/html/ProjectContainer";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/code-playground",
    element: <CodePlayGround />
  },
  {
    path: "/learn",
    element: <AllSubjects />
  },
  {
    path: "/learn/html",
    element: <Html />
  },
  {
    path: "/projects/html",
    element: <Html />
  },
  {
    path: "/learn/html/:lesson",
    element: <HtmlLessons />
  },
  {
    path: "/projects/html/:project",
    element: <ProjectContainer />
  }
]);
