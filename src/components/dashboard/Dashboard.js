// src/components/dashboard/Dashboard.js
import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import StatCard from './StatCard';
import ChartCard from './ChartCard';
import SummaryCard from './SummaryCard';
import { FaUserGraduate, FaQuestionCircle, FaMoneyBillWave, FaReceipt, FaExclamationCircle } from 'react-icons/fa';

const Dashboard = () => {
  const { dashboardData } = useAppContext();
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard 
          icon={<FaQuestionCircle className="w-6 h-6 text-white" />} 
          label="Student Enquiries" 
          value={dashboardData.enquiries} 
          color="bg-yellow-500"
        />
        <StatCard 
          icon={<FaUserGraduate className="w-6 h-6 text-white" />} 
          label="Admissions" 
          value={dashboardData.admissions} 
          color="bg-pink-500"
        />
        <StatCard 
          icon={<FaMoneyBillWave className="w-6 h-6 text-white" />} 
          label="Amount Received" 
          value={dashboardData.receivedAmount} 
          color="bg-green-500"
          prefix="₹"
        />
        <StatCard 
          icon={<FaReceipt className="w-6 h-6 text-white" />} 
          label="Expenses" 
          value={dashboardData.expenses} 
          color="bg-red-500" 
          prefix="₹"
        />
        <StatCard 
          icon={<FaExclamationCircle className="w-6 h-6 text-white" />} 
          label="Pending Amount" 
          value={dashboardData.pendingAmount} 
          color="bg-yellow-600"
          prefix="₹"
        />
      </div>
      
      {/* Charts and Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <ChartCard title="Earnings" />
          <ChartCard title="Admissions" />
        </div>
        <div className="lg:col-span-4">
          <SummaryCard />
          <div className="mt-6">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-medium mb-4">Course Distribution</h3>
              <div className="aspect-square relative">
                {/* This would be your pie chart */}
                <div className="text-center p-4">
                  MS-CIT: 11<br />
                  Klic Diploma: 1
                </div>
              </div>
              <button className="mt-2 w-full py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;