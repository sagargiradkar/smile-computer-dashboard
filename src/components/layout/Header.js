import React from 'react';
import { FaUserCircle, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow h-16 flex items-center justify-between px-6">
      <div className="text-xl font-semibold text-gray-800">
        Smile Computer Management System
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
          <FaBell className="w-5 h-5" />
        </button>
        <div className="relative">
          <button className="flex items-center space-x-2 focus:outline-none">
            <FaUserCircle className="w-8 h-8 text-gray-600" />
            <span className="hidden md:block text-sm font-medium text-gray-700">Admin</span>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
              <FaUserCircle className="mr-2" /> Profile
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
              <FaCog className="mr-2" /> Settings
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
              <FaSignOutAlt className="mr-2" /> Sign out
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;