// src/components/dashboard/SummaryCard.js
import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

const SummaryCard = () => {
  const { dashboardData } = useAppContext();
  
  const netEarnings = dashboardData.receivedAmount - dashboardData.expenses;
  
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="bg-cyan-600 text-white p-2 rounded text-center mb-4">
        <h3 className="text-lg font-medium">Summary</h3>
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-gray-600">Gross Earnings</p>
          <p className="text-xl font-bold">₹{dashboardData.receivedAmount}</p>
        </div>
        <div className="border-t pt-4">
          <p className="text-gray-600">Total Expenses</p>
          <p className="text-xl font-bold">₹{dashboardData.expenses}</p>
        </div>
        <div className="border-t pt-4">
          <p className="text-gray-600">Net Earnings</p>
          <p className={`text-xl font-bold ${netEarnings < 0 ? 'text-red-600' : 'text-green-600'}`}>
            ₹{netEarnings}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;