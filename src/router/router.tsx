import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components";

import {
  Home,
  AboutUs,
  Contacts,
  Services,
  Formdata,
  News,
  Work,
  InteriorDesign,
  AvailablePositions,
  ErrorPage,
  ModernCottage,
  NewsPage,
} from "../pages";
// import * as NewsPages from "../pages/News/NewsPages/index.tsx";

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
        path: "about_us",
        children: [
          { element: <AboutUs />, index: true },
          {
            path: "available_positions",
            element: <AvailablePositions />,
          },
        ],
      },
      {
        path: "services",
        children: [
          { element: <Services />, index: true },
          {
            path: "interior_design",
            element: <InteriorDesign />,
          },
        ],
      },

      {
        path: "work",
        children: [
          { element: <Work />, index: true },
          {
            path: "modern_cottage",
            element: <ModernCottage />,
          },
        ],
      },
      {
        path: "news",
        children: [
          { element: <News />, index: true },
          {
            path: ":id",
            element: <NewsPage />,
          },
        ],
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
