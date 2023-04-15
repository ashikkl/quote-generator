import { Link } from "react-router-dom";
import React from 'react'

export function Navbar(){
  return (
    <nav className="  bg-red-800 text-lg pt-5 pb-3 pl-3 min-w-full text-slate-100 :hover scale-110">
      <span className=" flex flex-between">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/bookmarks" className="hover:text-white">
            Bookmarks
          </Link>
      </span>
    </nav>
  );
}

export default Navbar;
