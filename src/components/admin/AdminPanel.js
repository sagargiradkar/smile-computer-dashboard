import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const adminOptions = [
    {
      title: "Profile",
      subtitle: "View / edit details of institute",
      path: "/admin/profile"
    },
    {
      title: "Courses and batch",
      subtitle: "Add Courses and batch",
      path: "/admin/courses"
    },
    {
      title: "Employee",
      subtitle: "add employee details",
      path: "/admin/employee"
    },
    {
      title: "Services",
      subtitle: "Extra services provided at institute",
      path: "/admin/services"
    },
    {
      title: "SMS Panel",
      subtitle: "SMS details and history",
      path: "/admin/sms"
    },
    {
      title: "Data Backup",
      subtitle: "Backup your data",
      path: "/admin/backup"
    },
    {
      title: "Activation and Licence",
      subtitle: "Activation and Licence Details",
      path: "/admin/activation"
    },
    {
      title: "Whats App Panel",
      subtitle: "Whats App SMS details and history",
      path: "/admin/whatsapp"
    }
  ];

  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="p-4 bg-gray-200 border-b border-gray-300">
        <h1 className="text-xl font-semibold">Admin Panel</h1>
      </div>
      
      <div className="flex flex-col p-4 space-y-1">
        {adminOptions.map((option, index) => (
          <Link 
            key={index} 
            to={option.path} 
            className="block bg-white hover:bg-gray-50 border-b border-gray-200 transition-colors"
          >
            <div className="p-3">
              <h2 className="text-base font-medium text-gray-800">{option.title}</h2>
              <p className="text-sm text-blue-600">{option.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Right empty area with yellow border shown in the image */}
      <div className="fixed top-0 bottom-0 right-0 w-1 bg-yellow-400 ml-auto" 
           style={{ left: 'calc(50% + 300px)' }}></div>
    </div>
  );
};

export default AdminPanel;