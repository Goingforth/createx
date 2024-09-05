import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contacts from "../pages/Contacts/Contacts";
import Services from "../pages/Services/Services";
import Formdata from "../pages/Formdata/Formdata";
import News from "../pages/News/News";
import Work from "../pages/Work/Work";

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
        element: <AboutUs />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "news",
        element: <News />,
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
