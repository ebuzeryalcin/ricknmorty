import React from "react";
import logo from "../logo.svg";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "@mui/material";
export default function Header() {
  return (
    <header className="header flex">
      <Link href="/">
        <img
          aria-hidden="true"
          className="header-logo"
          src={logo}
          alt="Rick Sanchez"
        />
      </Link>

      <h1 className="header-title fw-300">Rick and Morty</h1>
      <Link href="/search" underline="none" color="inherit">
        <SearchRoundedIcon fontSize="large" style={{ color: 'white' }}/>
      </Link>
    </header>
  );
}
