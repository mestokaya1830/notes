import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../views/Layout.js";
import Home from "../views/Home.js";

const NotFound = React.lazy(() => import('../views/NotFound.js'))

export default function index() {
  const Router = createBrowserRouter([
    {
      path: "/",
      name: "layout",
      element: <Layout />,
      children: [
        {
          path: "/",
          name: "home",
          element: <Home />
        },
      ],
    },
    {
      path:'*',
      name:'notfound',
      element: <React.Suspense fallback="Loading..."><NotFound /></React.Suspense>
    }
  ]);
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}
