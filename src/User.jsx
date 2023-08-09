import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const userItems = [
  {
    title: "Settings",
    icon: "settings",
    path: "/settings",
  },
  {
    title: "Help",
    icon: "help",
    path: "/help",
  },
  {
    title: "Logout",
    icon: "logout",
    path: "/logout",
  },
];

export const User = () => {
  const [open, setOpen] = React.useState(false);
  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <div className="user-wrapper" ref={menuRef}>
      <span
        onClick={() => {
          setOpen(!open);
        }}
        className="s material-symbols-outlined"
        style={{ userSelect: "none", fontSize: 35, cursor: "pointer" }}
      >
        face
      </span>

      <div className={`dropdown ${open ? "active" : "inactive"}`}>
        <ul>
          <Link to="settings">
            <li
              className="material-symbols-outlined"
              style={{ padding: "8px 39px", userSelect: "none" }}
            >
              settings
            </li>
          </Link>
          <li
            className="material-symbols-outlined"
            style={{ padding: "8px 39px", userSelect: "none" }}
          >
            help
          </li>
          <li
            className="l material-symbols-outlined"
            style={{ padding: "8px 39px", userSelect: "none" }}
          >
            logout
          </li>
        </ul>
      </div>
    </div>
  );
};
