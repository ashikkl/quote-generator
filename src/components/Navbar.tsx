import { Link, useLocation } from "react-router-dom";
import React from "react";

export function Navbar() {
  const location = useLocation();
  return (
    <nav className="   text-lg pt-5 pb-3 min-w-full text-text-100 ">
      <span className=" flex w-full justify-around  ">
        <Link
          to="/"
          className={
            "hover:text-200 hover:scale-110 " +
            (location.pathname === "/" ? "font-bold" : "")
          }
        >
          Home
        </Link>
        <Link
          to="/bookmarks"
          className={
            "hover:text-200 hover:scale-110  " +
            (location.pathname === "/bookmarks" ? "font-bold" : "")
          }
        >
          Bookmarks
        </Link>
      </span>
    </nav>
  );
}

export default Navbar;
