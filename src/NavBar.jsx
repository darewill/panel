import React from "react";
import { Menu } from "./Menu";

export const NavBar = () => {

  return (
    <div className="nav-wrapper">
      <div className="logo" >
        <img
          src="https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png"
          style={{
            width: 80,
            height: 50,
            userSelect: "none",
            cursor: "pointer",
          }}
        />
      </div>
      <Menu />
    </div>
  );
};
