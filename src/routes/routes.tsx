import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import LogIn from "../pages/LogIn";
import { adminRoutes } from "./admin.routes";

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
    children: adminRoutes,
  },
]);

export default router;
