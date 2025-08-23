import React from "react";

function Navbar() {
  return (
    <nav className=" bg-gray-50 relative">
      <button className="bg-red-500 absolute top-0 right-0 px-3 py-1 text-white rounded m-4">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;