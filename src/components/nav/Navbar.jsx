import React from "react";
import NavLink from "./NavLink";
import Stack from "@mui/material/Stack";

import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-around"
        >
          <NavLink name="home" link="#home" />
          <p>/</p>
          <NavLink name="projects" link="#projects" />
          <p>/</p>
          <NavLink name="work" link="#work" />
          <p>/</p>
          <NavLink name="education" link="#education" />
        </Stack>
      </div>
    </nav>
  );
}

export default Navbar;