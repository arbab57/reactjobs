import React from "react";
import logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const linkClass = ({ isActive }) => {
    return isActive
      ? "bg-black hover:bg-black transition duration-100 text-white px-4 py-2 rounded"
      : "hover:bg-black transition duration-100 text-white px-4 py-2 rounded";
  };
  return (
    <header className=" flex sm:flex-row flex-col sm:gap-0 gap-3 justify-between bg-blue-600 py-3 md:px-20 px-5 mx-auto border-b border-slate-400">
      <div className="flex justify-center  items-center gap-1">
        <div className="bg-white rounded-full p-1">
          <img className="w-12" src={logo} alt="" />
        </div>
        <h1 className="text-white text-2xl font-semibold">React Jobs</h1>
      </div>

      <nav className="flex gap-2 justify-between items-center">
        <NavLink className={linkClass} to="/">
          Home
        </NavLink>
        <NavLink className={linkClass} to="/jobs">
          Jobs
        </NavLink>
        <NavLink className={linkClass} to="/add-job">
          Add Jobs
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
