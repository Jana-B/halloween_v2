import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import App from "../App.tsx";
import { ErrorPage } from "../pages/errorpage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "homepage",
        element: <App />,
      },
      {
        path: "",
        element: <></>,
      },
      {
        path: "",
        loader: () => redirect(""),
      },
    ],
  },
]);

export const CustomRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
