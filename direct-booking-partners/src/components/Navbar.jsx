// src/components/Navbar.jsx
import React from "react";
import Logo from "../assets/logo.png"
const Navbar = ({ navLinks }) => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 border-b border-base-200">
      <div className="max-w-6xl mx-auto w-full px-4 flex items-center justify-between">
       
           <a href="#" className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Direct Booking Partners Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </a>
    

        {/* Desktop Nav */}
        <div className="flex-none hidden md:flex items-center gap-4">
          <ul className="menu menu-horizontal px-1 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a href="#book-call" className="btn btn-ghost btn-sm">
              Login
            </a>
            <a href="#book-call" className="btn btn-primary btn-sm text-white">
              Book a strategy call
            </a>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="flex-none md:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-square">
              <span className="icon-[mdi--menu] text-xl">☰</span>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <div className="divider my-1" />
              <li>
                <a href="#book-call">Login</a>
              </li>
              <li>
                <a href="#book-call" className="font-semibold text-primary">
                  Book a strategy call
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
