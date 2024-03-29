import React from "react";

import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";

import SearchBar from "./SearchBar";

const Navbar = () => (
  <nav className="navbar">
    <Link
      to="/"
      style={{
        display: "flex",
        alignItems: "center",
        fontWeight: "400",
        fontSize: "2em",
      }}
    >
      not
      <span
        style={{
          fontWeight: "800",
        }}
      >
        YouTube
      </span>
    </Link>
    <SearchBar />
  </nav>
);

export default Navbar;
