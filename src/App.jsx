import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import { NavBar } from "./NavBar";
import { HeaderBar } from "./HeaderBar";
import { Home } from "./Home";
import { Analytics } from "./Analytics";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="main-wrapper">
      <div className="mainPageHeader">
        <NavBar />
        <HeaderBar />
      </div>
      <div className="content-area">
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      }
    ]
  },
]);

const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Main />
    </RouterProvider>
  </React.StrictMode>
);
