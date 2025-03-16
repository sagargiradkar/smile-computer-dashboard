// src/components/layout/Sidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaQuestionCircle,
  FaUserGraduate,
  FaMoneyBillWave,
  FaReceipt,
  FaBullhorn,
  FaCertificate,
  FaBell,
  FaChartBar,
  FaCog,
  FaHistory,
  FaChevronDown,
  FaChevronRight
} from 'react-icons/fa';

const Sidebar = () => {
  const [transactionsOpen, setTransactionsOpen] = useState(false);

  return (
    <div className="fixed left-0 top-0 w-64 h-full bg-gray-800 text-white overflow-y-auto">
      <div className="flex flex-col items-center py-4 bg-gray-700">
        <div className="w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="#6b7db3" />
            <circle cx="50" cy="50" r="32" fill="#ffffff" />
            <circle cx="50" cy="50" r="28" fill="#2a4c9e" />
            <text x="50" y="58" fontFamily="Arial" fontSize="16" fill="#fff" textAnchor="middle">Smile</text>
          </svg>
        </div>
        <div className="mt-2 text-white font-bold text-center">
          <div>Smile Computer Center</div>
        </div>
      </div>

      <nav className="mt-4">
        <ul className="space-y-1 px-2">
          <li>
            <NavLink to="/" className={({ isActive }) =>
              `flex items-center py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
            }>
              <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-600 rounded">F2</span>
              <FaHome className="mr-3" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/enquiry/new" className={({ isActive }) =>
              `flex items-center py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
            }>
              <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-600 rounded">F3</span>
              <FaQuestionCircle className="mr-3" /> Enquiry
            </NavLink>
          </li>
          <li>
            <NavLink to="/admissions" className={({ isActive }) =>
              `flex items-center py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
            }>
              <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-600 rounded">F4</span>
              <FaUserGraduate className="mr-3" /> Admissions
            </NavLink>
          </li>

          {/* Transactions with submenu */}
          <li className="relative">
            <div className="flex items-center justify-between py-2 px-4 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
              onClick={() => setTransactionsOpen(!transactionsOpen)}>
              <NavLink
                to="/transactions"
                className={({ isActive }) =>
                  `flex items-center w-full ${isActive ? 'bg-blue-600 text-white rounded-md' : 'text-gray-300'}`
                }
                onClick={(e) => e.stopPropagation()} // Prevent double-triggering with parent onClick
              >
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-600 rounded">F5</span>
                <FaMoneyBillWave className="mr-3" /> Transactions
              </NavLink>
              <div className="flex-shrink-0">
                {transactionsOpen ? <FaChevronDown className="w-4 h-4" /> : <FaChevronRight className="w-4 h-4" />}
              </div>
            </div>

            {/* Submenu */}
            {transactionsOpen && (
              <ul className="pl-12 mt-1 space-y-1">
                <li>
                  <NavLink
                    to="/transactions/fees-receipt"
                    className={({ isActive }) =>
                      `flex items-center py-2 px-3 text-sm rounded-md transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
                    }
                  >
                    <FaReceipt className="mr-2 text-sm" /> Fee Receipt
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/transactions/history"
                    className={({ isActive }) =>
                      `flex items-center py-2 px-3 text-sm rounded-md transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
                    }
                  >
                    <FaHistory className="mr-2 text-sm" /> History
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/expenses" className={({ isActive }) =>
              `flex items-center py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
            }>
              <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-600 rounded">F6</span>
              <FaReceipt className="mr-3" /> Expenses
            </NavLink>
          </li>
          <li>
            <NavLink to="/marketing" className={({ isActive }) =>
              `flex items-center py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
            }>
              <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-600 rounded">F7</span>
              <FaBullhorn className="mr-3" /> Marketing
            </NavLink>
          </li>
          <li>
            <NavLink to="/certificates" className={({ isActive }) =>
              `flex items-center py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
            }>
              <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-600 rounded">F8</span>
              <FaCertificate className="mr-3" /> Certificates
            </NavLink>
          </li>
          <li>
            <NavLink to="/reminders" className={({ isActive }) =>
              `flex items-center py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
            }>
              <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-600 rounded">F9</span>
              <FaBell className="mr-3" /> Reminders
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports" className={({ isActive }) =>
              `flex items-center py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
            }>
              <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-600 rounded">F10</span>
              <FaChartBar className="mr-3" /> Reports
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" className={({ isActive }) =>
              `flex items-center py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
            }>
              <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-gray-600 rounded">F11</span>
              <FaCog className="mr-3" /> Admin Panel
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;