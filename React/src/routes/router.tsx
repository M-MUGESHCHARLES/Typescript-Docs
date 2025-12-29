import { createBrowserRouter } from "react-router-dom";
import { PropsPage, UseState, Welcome } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/props",
    element: <PropsPage />,
  },
  {
    path: "/usestate",
    element: <UseState />,
  },
]);
