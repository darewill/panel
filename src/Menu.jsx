import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import { Home } from "./Home";
import { Analytics } from "./Analytics";


const menuItems = [
  {
    title: "Home",
    icon: "home",
    path: '/'
  },
  {
    title: "Analytics",
    icon: "analytics",
    path: '/analytics'
  },
  {
    title: "Booking",
    icon: "flight",
    path: '/booking'
  },
  {
    title: "File",
    icon: "description",
    path: '/file'
  },
];

export const Menu = () => {
  const menuComponents = menuItems.map((item) => (
    <Link to={item.path} style={{textDecoration:'none', color:'black'}}>
    <div className="menu-item">

      <span
        class="material-symbols-outlined"
        style={{
          cursor:'pointer',
          width: 20,
          height: 20,
          fontSize: 25,
          userSelect:'none'
        }}
      >
        {item.icon}
      </span>
      <div style={{ marginLeft: 10, marginTop: 2, fontSize: 20, userSelect:'none', cursor:'pointer' }}>{item.title}</div>

    </div>
    </Link>
  ));

  return <div className="menu-wrapper">{menuComponents}</div>;
};
