import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import { NavBar } from "./NavBar";
import { HeaderBar } from "./HeaderBar";
import { Home } from "./Home";
import { Analytics } from "./Analytics";
import { Booking } from "./Booking";
import { Settings } from "./Settings";
import { File } from "./File";
import { Error } from "./Error";
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
        errorElement: <Error />
      },
      {
        path: "analytics",
        element: <Analytics />,
        errorElement: <Error />
      },
      {
        path: "booking",
        element: <Booking />,
        errorElement: <Error />
      },
      {
        path: "file",
        element: <File />,
        errorElement: <Error />
      },
      {
        path: "settings",
        element: <Settings />
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
