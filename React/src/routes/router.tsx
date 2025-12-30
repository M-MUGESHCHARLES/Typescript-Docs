import { createBrowserRouter } from "react-router-dom";
import { PropsPage, UseReducer, UseState, Welcome } from "../pages";

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
    path: "/hooks/usestate",
    element: <UseState />,
  },
  {
    path: "/hooks/usereducer",
    element: <UseReducer />,
  },
]);
