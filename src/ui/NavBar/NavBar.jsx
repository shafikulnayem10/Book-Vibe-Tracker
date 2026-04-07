import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const getLinks = () => (
    <>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `font-semibold px-3 py-1 rounded-md ${
              isActive
                ? "text-green-500 border border-green-500"
                : "text-gray-700"
            }`
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            `font-semibold px-3 py-1 rounded-md ${
              isActive
                ? "text-green-500 border border-green-500"
                : "text-gray-700"
            }`
          }
        >
          Listed Books
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/pages-to-read"
          className={({ isActive }) =>
            `font-semibold px-3 py-1 rounded-md ${
              isActive
                ? "bg-green-500 text-white"
                : "text-gray-700"
            }`
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center gap-2">
            <h2 className="font-bold text-xl">Book Vibe</h2>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex items-center gap-4">{getLinks()}</ul>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
              Signin
            </button>
            <button className="px-4 py-2 bg-emerald-400 text-white rounded-md hover:bg-emerald-500 transition">
              Signup
            </button>
          </div>

          <div className="lg:hidden">
            <details className="dropdown dropdown-end">
              <summary className="btn btn-ghost p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </summary>
              <ul className="absolute right-0 mt-3 w-52 bg-white rounded-lg shadow-md p-3 space-y-2">
                {getLinks()}
                <div className="flex flex-col gap-2 mt-2">
                  <button className="px-3 py-2 bg-green-500 text-white rounded-md">Signin</button>
                  <button className="px-3 py-2 bg-emerald-400 text-white rounded-md">Signup</button>
                </div>
              </ul>
            </details>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;