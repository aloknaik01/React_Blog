import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/auth/authThunks";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("Logged out succesfully");
    navigate("/login");
  };

  return (
    <nav className=" bg-gray-50 relative">
      {auth.isAuthenticated && (
        <button
          className="bg-red-500 absolute top-0 right-0 px-3 py-1 text-white rounded m-4"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar;
