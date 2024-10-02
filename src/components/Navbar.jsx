import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState(null);

  // Function to handle link click
  const handleLinkClick = (link) => {
    setActiveLink(activeLink === link ? null : link); // Toggle active state
  };

  return (
    <nav className="bg-white text-black p-4 pb-0 shadow-md">
      <div className="container mx-auto flex items-end justify-around">
        {/* Left Side: Logo and Navigation Links */}
        <div className="flex flex-2/3 items-center gap-8">
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
          <div className="flex items-center gap-5">
            <NavLink
              to="/industries"
              onClick={() => handleLinkClick("industries")}
              className={({ isActive }) =>
                `p-4 flex flex-row gap-1 ${
                  activeLink === "industries"
                    ? "bg-[rgb(0,0,72)] text-white"
                    : isActive
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
                    className="dig-UIIcon dig-UIIcon--standard transform translate-y-0 transition-transform duration-300 ease-in-out"
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
                    className="dig-UIIcon dig-UIIcon--standard transform transition-transform duration-300 ease-in-out translate-y-1"
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
                `hover:underline p-4 flex flex-row gap-1 ${
                  activeLink === "services"
                    ? "bg-[rgb(0,0,72)] text-white"
                    : isActive
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
                    className="dig-UIIcon dig-UIIcon--standard transform translate-y-0 transition-transform duration-300 ease-in-out"
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
                    className="dig-UIIcon dig-UIIcon--standard transform transition-transform duration-300 ease-in-out translate-y-1"
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
                `hover:underline p-4  flex  flex-row gap-1 ${
                  activeLink === "insights"
                    ? "bg-[rgb(0,0,72)] text-white"
                    : isActive
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
                    className="dig-UIIcon dig-UIIcon--standard"
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
                    className="dig-UIIcon dig-UIIcon--standard"
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
                `hover:underline p-4 flex flex-row gap-1 ${
                  activeLink === "about"
                    ? "bg-[rgb(0,0,72)] text-white"
                    : isActive
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
                    className="dig-UIIcon dig-UIIcon--standard transform translate-y-0 transition-transform duration-300 ease-in-out"
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
                    className="dig-UIIcon dig-UIIcon--standard transform transition-transform duration-300 ease-in-out translate-y-1"
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
            placeholder="Search..."
            className="inline-flex items-center justify-center px-3 py-2 rounded-md text-black border border-gray-400 bg-white mb-2 w-[20rem]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
