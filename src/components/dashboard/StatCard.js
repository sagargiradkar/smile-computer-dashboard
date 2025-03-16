// src/components/dashboard/StatCard.js
import React from 'react';

const StatCard = ({ icon, label, value, color, prefix = '' }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mr-4 shrink-0`}>
        {icon}
      </div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="text-2xl font-bold text-gray-800">{prefix}{value}</p>
      </div>
    </div>
  );
};

export default StatCard;