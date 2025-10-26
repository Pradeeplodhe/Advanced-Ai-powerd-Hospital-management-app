import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Allroutse from "./Allroutes";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "PatientHealthForm", path: "/PatientHealthForm" },
    { name: "Appointments", path: "/Appointments" },
    { name: "Register", path: "/Register" },
    { name: "Login", path: "/Login" },
    { name: "UserProfile", path: "/UserProfile" },
   
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-green-700">
            🏥 HospitalSys
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-green-700 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-gray-700 hover:text-green-700 focus:outline-none">
              {open ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col px-6 py-4 space-y-3">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="block text-gray-700 hover:text-green-700 font-medium transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
