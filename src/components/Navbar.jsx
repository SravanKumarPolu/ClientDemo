import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuSvg from "../assets/Menu.svg";

const Navbar = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to track mobile menu

  // Function to handle link click
  const handleLinkClick = (link) => {
    setActiveLink(activeLink === link ? null : link); // Toggle active state
    setIsMobileMenuOpen(false); // Close mobile menu on link click
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white text-black p-4 pb-0 shadow-md">
      <div className="container mx-auto flex items-end justify-between">
        {/* Left Side: Logo and Navigation Links */}
        <div className="flex pl-32 items-center gap-8">
          {/* Cognizant Logo */}
          <Link to="/" aria-label="Home">
            <img
              alt="Cognizant logo"
              width="150"
              height="40"
              src="https://cognizant.scene7.com/is/content/cognizant/COG-Logo-2022-1?fmt=png-alpha"
            />
          </Link>

          {/* Navbar Links */}
          <div className="hidden  md:flex items-center ">
            <NavLink
              to="/industries"
              onClick={() => handleLinkClick("industries")}
              className={({ isActive }) =>
                `p-4 flex flex-row gap-1 ${
                  activeLink === "industries" || isActive
                    ? "bg-[rgb(0,0,72)] text-white"
                    : "hover:bg-[rgb(0,0,72)] hover:text-white"
                }`
              }>
              Industries
              <span>
                {activeLink === "industries" ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="dig-UIIcon dig-UIIcon--standard transform translate-y-0 transition-transform duration-500 ease-in-out"
                    width="24"
                    height="24"
                    role="presentation"
                    focusable="false">
                    <path
                      d="m18.75 14.75-6.5-6.25-6.5 6.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      vectorEffect="non-scaling-stroke"></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="dig-UIIcon dig-UIIcon--standard transform transition-transform duration-500 ease-in-out translate-y-1"
                    width="24"
                    height="24"
                    role="presentation"
                    focusable="false">
                    <path
                      d="m5.25 9.25 6.5 6.25 6.5-6.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      vectorEffect="non-scaling-stroke"></path>
                  </svg>
                )}
              </span>
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => handleLinkClick("services")}
              className={({ isActive }) =>
                `p-4 flex flex-row gap-1 ${
                  activeLink === "services" || isActive
                    ? "bg-[rgb(0,0,72)] text-white"
                    : "hover:bg-[rgb(0,0,72)] hover:text-white"
                }`
              }>
              Services
              <span>
                {activeLink === "services" ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="dig-UIIcon dig-UIIcon--standard transform translate-y-0 transition-transform duration-500 ease-in-out"
                    width="24"
                    height="24"
                    role="presentation"
                    focusable="false">
                    <path
                      d="m18.75 14.75-6.5-6.25-6.5 6.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      vectorEffect="non-scaling-stroke"></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="dig-UIIcon dig-UIIcon--standard transform transition-transform duration-500 ease-in-out translate-y-1"
                    width="24"
                    height="24"
                    role="presentation"
                    focusable="false">
                    <path
                      d="m5.25 9.25 6.5 6.25 6.5-6.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      vectorEffect="non-scaling-stroke"></path>
                  </svg>
                )}
              </span>
            </NavLink>

            <NavLink
              to="/insights"
              onClick={() => handleLinkClick("insights")}
              className={({ isActive }) =>
                `p-4 flex flex-row gap-1 ${
                  activeLink === "insights" || isActive
                    ? "bg-[rgb(0,0,72)] text-white"
                    : "hover:bg-[rgb(0,0,72)] hover:text-white"
                }`
              }>
              Insights
              <span>
                {activeLink === "insights" ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="dig-UIIcon dig-UIIcon--standard transform translate-y-0 transition-transform duration-500 ease-in-out"
                    width="24"
                    height="24"
                    role="presentation"
                    focusable="false">
                    <path
                      d="m18.75 14.75-6.5-6.25-6.5 6.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      vectorEffect="non-scaling-stroke"></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="dig-UIIcon dig-UIIcon--standard transform transition-transform duration-500 ease-in-out translate-y-1"
                    width="24"
                    height="24"
                    role="presentation"
                    focusable="false">
                    <path
                      d="m5.25 9.25 6.5 6.25 6.5-6.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      vectorEffect="non-scaling-stroke"></path>
                  </svg>
                )}
              </span>
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => handleLinkClick("about")}
              className={({ isActive }) =>
                `p-4 flex flex-row gap-1 ${
                  activeLink === "about" || isActive
                    ? "bg-[rgb(0,0,72)] text-white"
                    : "hover:bg-[rgb(0,0,72)] hover:text-white"
                }`
              }>
              About
              <span>
                {activeLink === "about" ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="dig-UIIcon dig-UIIcon--standard transform translate-y-0 transition-transform duration-500 ease-in-out"
                    width="24"
                    height="24"
                    role="presentation"
                    focusable="false">
                    <path
                      d="m18.75 14.75-6.5-6.25-6.5 6.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      vectorEffect="non-scaling-stroke"></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="dig-UIIcon dig-UIIcon--standard transform transition-transform duration-500 ease-in-out translate-y-1"
                    width="24"
                    height="24"
                    role="presentation"
                    focusable="false">
                    <path
                      d="m5.25 9.25 6.5 6.25 6.5-6.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      vectorEffect="non-scaling-stroke"></path>
                  </svg>
                )}
              </span>
            </NavLink>
          </div>
        </div>

        {/* Right Side: Mobile Menu Icon and Search Bar */}
        <div className="flex pr-24 flex-col items-center gap-5">
          {/* Mobile Menu Icon */}
          <button onClick={toggleMobileMenu} className="md:hidden">
            <img src={MenuSvg} alt="Menu" className="w-8 h-8" />
          </button>

          {/* Search Bar */}
          <div className="hidden lg:flex  md:flex gap-3">
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
            placeholder="Search..."
            className="hidden md:inline-flex items-center justify-center px-3 py-2 rounded-md text-black border border-gray-400 bg-white mb-2 w-[20rem]"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2">
          <NavLink
            to="/industries"
            onClick={() => handleLinkClick("industries")}
            className={({ isActive }) =>
              `block p-4 ${
                activeLink === "industries" || isActive
                  ? "bg-[rgb(0,0,72)] text-white"
                  : "hover:bg-[rgb(0,0,72)] hover:text-white"
              }`
            }>
            Industries
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => handleLinkClick("services")}
            className={({ isActive }) =>
              `block p-4 ${
                activeLink === "services" || isActive
                  ? "bg-[rgb(0,0,72)] text-white"
                  : "hover:bg-[rgb(0,0,72)] hover:text-white"
              }`
            }>
            Services
          </NavLink>
          <NavLink
            to="/insights"
            onClick={() => handleLinkClick("insights")}
            className={({ isActive }) =>
              `block p-4 ${
                activeLink === "insights" || isActive
                  ? "bg-[rgb(0,0,72)] text-white"
                  : "hover:bg-[rgb(0,0,72)] hover:text-white"
              }`
            }>
            Insights
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => handleLinkClick("about")}
            className={({ isActive }) =>
              `block p-4 ${
                activeLink === "about" || isActive
                  ? "bg-[rgb(0,0,72)] text-white"
                  : "hover:bg-[rgb(0,0,72)] hover:text-white"
              }`
            }>
            About
          </NavLink>
          <NavLink
            to="/careers"
            className="block p-4 hover:bg-[rgb(0,0,72)] hover:text-white">
            Careers
          </NavLink>
          <NavLink
            to="/news"
            className="block p-4 hover:bg-[rgb(0,0,72)] hover:text-white">
            News
          </NavLink>
          <NavLink
            to="/events"
            className="block p-4 hover:bg-[rgb(0,0,72)] hover:text-white">
            Events
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
