import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PATH } from "./config";
import * as Screens from "./screens";

const router = createBrowserRouter([
  {
    path: PATH.HOME.path,
    element: <Screens.Home />,
  },
  {
    path: PATH.LOGIN.path,
    element: <Screens.Login />,
  },
  {
    path: PATH.REGISTER.path,
    element: <Screens.Register />,
  },
  {
    path: PATH.DASHBOARD.path,
    element: <Screens.Dashboard />,
  },
  {
    path: "*",
    element: <Screens.NotFound />,
  },
]);
export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
