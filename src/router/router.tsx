import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { ErrorPage } from "../pages/errorpage.tsx";
import { Page2 } from "../pages/page2.tsx";
import CountdownTimer from "../components/countdown.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CountdownTimer />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/homepage",
    element: <CountdownTimer />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "" /* I can either redirect everything to the homepage using * wildcard or I can show an error page */,
    loader: () => redirect("/"),
  },
]);

export const CustomRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
