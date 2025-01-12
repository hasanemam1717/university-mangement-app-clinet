import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import LogIn from "../pages/LogIn";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routersGenaretors";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routeGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGenerator(studentPaths),
  },

  {
    path: "login",
    element: <LogIn></LogIn>,
  },
]);

export default router;
