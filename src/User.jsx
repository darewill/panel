import React, {useEffect, useRef} from "react";

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
          <li
            className="material-symbols-outlined"
            style={{ padding: "8px 39px", userSelect: "none" }}
          >
            settings
          </li>
          <li
            className="material-symbols-outlined"
            style={{ padding: "8px 39px", userSelect: "none" }}
          >
            help
          </li>
          <li
            className="l material-symbols-outlined"
            style={{ padding: "8px 39px", userSelect: "none"}}
          >
            logout
          </li>
        </ul>
      </div>
    </div>
  );
};
