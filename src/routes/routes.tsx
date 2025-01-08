import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import LogIn from "../pages/LogIn";
import { adminPaths } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
    ],
  },
  {
    path: "/admin",
    element: <App></App>,
    children: adminPaths,
  },
]);

export default router;
