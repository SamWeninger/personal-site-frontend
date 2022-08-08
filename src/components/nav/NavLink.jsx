
import React from "react";

function NavLink(props) {
  return (
    <a
      href={props.link}
      className="nav-link"
    >
      {props.name}
    </a>
  );
}

export default NavLink;