import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoBookmarkOutline } from "react-icons/io5";

const Navbar = () => {
  const [bookmarkCount, setBookmarkCount] = useState(0);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('bookmark')) || [];
    setBookmarkCount(favs.length);
  }, []);

  const navbarLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "font-extrabold text-rose-500 border-b-2 border-rose-500 relative inline-block transition-colors duration-300 before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-full before:h-[2px] before:bg-rose-500 before:scale-100 before:transition-transform before:duration-300 hover:before:scale-100"
            : "font-extrabold text-rose-500 relative inline-block transition-colors duration-300 before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-full before:h-[2px] before:bg-rose-500 before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100 rounded"
        }
      >
        HOME
      </NavLink>

      <NavLink
        to="/random"
        className={({ isActive }) =>
          isActive
            ? "font-extrabold text-rose-500 border-b-2 border-rose-500 relative inline-block transition-colors duration-300 before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-full before:h-[2px] before:bg-rose-500 before:scale-100 before:transition-transform before:duration-300 hover:before:scale-100"
            : "font-extrabold text-rose-500 relative inline-block transition-colors duration-300 before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-full before:h-[2px] before:bg-rose-500 before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100 rounded"
        }
      >
        RANDOM
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "font-extrabold text-rose-500 border-b-2 border-rose-500 relative inline-block transition-colors duration-300 before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-full before:h-[2px] before:bg-rose-500 before:scale-100 before:transition-transform before:duration-300 hover:before:scale-100"
            : "font-extrabold text-rose-500 relative inline-block transition-colors duration-300 before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-full before:h-[2px] before:bg-rose-500 before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100 rounded"
        }
      >
        ABOUT
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-rose-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content gap-4 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navbarLinks}
          </ul>
        </div>
        <Link to={"/"}>
          <img className="w-12 rounded-full" src="https://i.ibb.co/C3sks2Nj/Meal-Explorer.png" alt="Logo" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          {navbarLinks}
        </ul>
      </div>

      <div className="navbar-end">

        <Link to={"/bookmark"}>
          <div className="w-14 mx-auto relative">
            <button className="text-rose-500 hover:border-2 hover:border-rose-500 rounded-4xl p-2 relative">
              <p className="text-xl font-bold"><IoBookmarkOutline /></p>
              {bookmarkCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {bookmarkCount}
                </span>
              )}
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
