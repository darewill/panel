import React from "react";
import { Menu } from "./Menu";
import { Link } from 'react-router-dom';

export const NavBar = () => {

  return (
    <div className="nav-wrapper">
      <div className="logo" >
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <img
          src="https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png"
          style={{
            width: 80,
            height: 50,
            userSelect: "none",
            cursor: "pointer",
          }}
        />
        </Link>
      </div>
      <Menu />
    </div>
  );
};
