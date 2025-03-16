// src/components/layout/Sidebar.js
import React from 'react';
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
  FaCog
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-64 h-full bg-dark overflow-y-auto">
      <div className="flex flex-col items-center py-4 bg-light">
        <div className="w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="#6b7db3" />
            <circle cx="50" cy="50" r="32" fill="#ffffff" />
            <circle cx="50" cy="50" r="28" fill="#2a4c9e" />
            <text x="50" y="58" fontFamily="Arial" fontSize="16" fill="#fff" textAnchor="middle">Smile</text>
          </svg>
        </div>
        <div className="mt-2 text-dark font-bold text-center">
          <div>Smile Computer Center</div>
        </div>
      </div>
      
      <nav className="mt-4">
        <ul className="space-y-1">
          <li>
            <NavLink to="/" className={({isActive}) => 
              `sidebar-link ${isActive ? 'active' : ''}`
            }>
              <span className="function-key">F2</span>
              <FaHome className="mr-3" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/enquiry/new" className={({isActive}) => 
              `sidebar-link ${isActive ? 'active' : ''}`
            }>
              <span className="function-key">F3</span>
              <FaQuestionCircle className="mr-3" /> Enquiry
            </NavLink>
          </li>
          <li>
            <NavLink to="/admissions" className={({isActive}) => 
              `sidebar-link ${isActive ? 'active' : ''}`
            }>
              <span className="function-key">F4</span>
              <FaUserGraduate className="mr-3" /> Admissions
            </NavLink>
          </li>
          <li>
            <NavLink to="/transactions" className={({isActive}) => 
              `sidebar-link ${isActive ? 'active' : ''}`
            }>
              <span className="function-key">F5</span>
              <FaMoneyBillWave className="mr-3" /> Transactions
            </NavLink>
          </li>
          <li>
            <NavLink to="/expenses/add" className={({isActive}) => 
              `sidebar-link ${isActive ? 'active' : ''}`
            }>
              <span className="function-key">F6</span>
              <FaReceipt className="mr-3" /> Expenses
            </NavLink>
          </li>
          <li>
            <NavLink to="/marketing" className={({isActive}) => 
              `sidebar-link ${isActive ? 'active' : ''}`
            }>
              <span className="function-key">F7</span>
              <FaBullhorn className="mr-3" /> Marketing
            </NavLink>
          </li>
          <li>
            <NavLink to="/certificates" className={({isActive}) => 
              `sidebar-link ${isActive ? 'active' : ''}`
            }>
              <span className="function-key">F8</span>
              <FaCertificate className="mr-3" /> Certificates
            </NavLink>
          </li>
          <li>
            <NavLink to="/reminders" className={({isActive}) => 
              `sidebar-link ${isActive ? 'active' : ''}`
            }>
              <span className="function-key">F9</span>
              <FaBell className="mr-3" /> Reminders
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports" className={({isActive}) => 
              `sidebar-link ${isActive ? 'active' : ''}`
            }>
              <span className="function-key">F10</span>
              <FaChartBar className="mr-3" /> Reports
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" className={({isActive}) => 
              `sidebar-link ${isActive ? 'active' : ''}`
            }>
              <span className="function-key">F11</span>
              <FaCog className="mr-3" /> Admin Panel
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;