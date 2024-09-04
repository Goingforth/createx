import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Contacts from "../pages/Contacts/Contacts";
import Formdata from "../pages/Formdata/Formdata";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        element: <Contacts />,
      },
      {
        path: "formdata",
        element: <Formdata />,
      },
    ],
  },
]);
