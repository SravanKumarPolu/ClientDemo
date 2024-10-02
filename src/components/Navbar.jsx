import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white text-black p-4 pb-0 shadow-md">
      <div className="container mx-auto flex items-end justify-around">
        {/* Left Side: Logo and Navigation Links */}
        <div className="flex flex-2/3 items-center gap-8">
          {/* Cognizant Logo */}
          <Link to="/Home" aria-label="Home">
            <img
              alt="Cognizant logo"
              width="150"
              height="36"
              src="https://cognizant.scene7.com/is/content/cognizant/COG-Logo-2022-1?fmt=png-alpha"
            />
          </Link>

          {/* Navbar Links */}
          <div className="flex items-center gap-5">
            <NavLink
              to="/industries"
              className={({ isActive }) =>
                `hover:underline p-4 
                ${
                  isActive
                    ? "bg-[rgb(0,0,72)] text-white"
                    : "hover:bg-[rgb(0,0,72)] hover:text-white"
                }`
              }>
              Industries
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `hover:underline p-4 
                ${
                  isActive
                    ? "bg-[rgb(0,0,72)] text-white"
                    : "hover:bg-[rgb(0,0,72)] hover:text-white"
                }`
              }>
              Services
            </NavLink>
            <NavLink
              to="/insights"
              className={({ isActive }) =>
                `hover:underline p-4 
                ${
                  isActive
                    ? "bg-[rgb(0,0,72)] text-white"
                    : "hover:bg-[rgb(0,0,72)] hover:text-white"
                }`
              }>
              Insights
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:underline p-4 
                ${
                  isActive
                    ? "bg-[rgb(0,0,72)] text-white"
                    : "hover:bg-[rgb(0,0,72)] hover:text-white"
                }`
              }>
              About
            </NavLink>
          </div>
        </div>

        {/* Right Side: Search Bar and Optional Links */}
        <div className="flex flex-col items-center gap-5">
          {/* Placeholder for additional links like Careers, News, etc. */}
          <div className="hidden md:flex gap-3">
            <NavLink to="/careers" className="hover:underline">
              Careers
            </NavLink>
            <NavLink to="/news" className="hover:underline">
              News
            </NavLink>
            <NavLink to="/events" className="hover:underline">
              Events
            </NavLink>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="inline-flex items-center justify-center px-3 py-2 rounded-md text-black border border-gray-400 bg-white mb-2"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
