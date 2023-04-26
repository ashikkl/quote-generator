import React from "react";

function Footer() {
  return (
    <div className="flex justify-center items-center p-8  font-light text-sm">
      <div className="select-none text-text-100">
        <div> &copy;{Date().split(` `)[3]} Ashik K L</div>
        <div>All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
