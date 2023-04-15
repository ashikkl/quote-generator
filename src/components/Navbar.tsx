import { Link } from "react-router-dom";
import React from 'react'

export function Navbar(){
  return (
    <nav className="   text-lg pt-5 pb-3 pl-3 min-w-full text-text-100 ">
      <span className=" flex w-full justify-around px-20 ">
        <Link to="/" className="hover:text-200 hover:scale-110">
          Home
        </Link>
        <Link
          to="/bookmarks"
          className="hover:text-200 hover:scale-110  "
        >
          Bookmarks
        </Link>
      </span>
    </nav>
  );
}

export default Navbar;
