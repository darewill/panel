import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import { NavBar } from "./NavBar";
import { HeaderBar } from "./HeaderBar";
import { Home } from "./Home";
import { Analytics } from "./Analytics";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "./Menu";

const Main = () => {
  return (
    <div className="main-wrapper">
      <div className="mainPageHeader">
        <NavBar />
        <HeaderBar />
      </div>
      <div className="content-area">
    
        <Home /> 
    
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
