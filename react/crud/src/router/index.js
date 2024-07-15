import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../views/Layout.js";
import Home from "../views/Home.js";

const NotFound = React.lazy(() => import('../views/NotFound.js'))
const CreateUser = React.lazy(() => import('../views/CreateUser.js'))
const Details = React.lazy(() => import('../views/Details.js'))

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
        {
          path: "details/:id",
          name: "details",
          element: <React.Suspense fallback="Loading..."><Details /></React.Suspense>
        },
        {
          path: "/create-user",
          name: "create-user",
          element: <React.Suspense fallback="Loading..."><CreateUser /></React.Suspense>
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
