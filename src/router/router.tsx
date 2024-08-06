import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/Layout/Layout";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "about",
        element: <div>About Us</div>,
      },
      {
        path: "services",
        element: <div>Services</div>,
      },
      {
        path: "work",
        element: <div>Work</div>,
      },
      {
        path: "news",
        element: <div>News</div>,
      },
      {
        path: "contacts",
        element: <div>Contacts</div>,
      },
    ],
  },
]);
