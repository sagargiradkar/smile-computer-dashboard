import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ExpensesList from './ExpensesList';

const ExpensesComponent = () => {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This would normally be an API call
    // Simulating data fetch with setTimeout
    setTimeout(() => {
      const dummyExpenses = [
        { id: 1, date: '15 Mar 2025', description: 'Office Rent', amount: '12,000' },
        { id: 2, date: '14 Mar 2025', description: 'Electricity Bill', amount: '3,500' },
        { id: 3, date: '10 Mar 2025', description: 'Internet Services', amount: '1,800' },
        { id: 4, date: '08 Mar 2025', description: 'Staff Salary - Receptionist', amount: '15,000' },
        { id: 5, date: '05 Mar 2025', description: 'Computer Maintenance', amount: '2,500' },
      ];
      setExpenses(dummyExpenses);
      setLoading(false);
    }, 800);
  }, []);

  const handleNavigateToAddExpense = () => {
    navigate('/expenses/add');
  };

  return (
    <div className="flex flex-col w-full h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white px-4 py-2 border-b shadow-sm">
        <h1 className="text-lg font-semibold text-gray-700">Expenses</h1>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Add Expenses Card */}
          <div 
            className="bg-white rounded shadow p-4 flex items-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={handleNavigateToAddExpense}
          >
            <div className="bg-gray-200 p-3 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <h2 className="font-medium text-gray-800">Add Expenses</h2>
              <p className="text-xs text-gray-500">इकाई-वार खर्च डालने का विकल्प</p>
            </div>
          </div>
          
          {/* Expenses Summary Card */}
          <div className="bg-white rounded shadow p-4 flex items-center cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h2 className="font-medium text-gray-800">Expenses Summary</h2>
              <p className="text-xs text-gray-500">इकाई-वार खर्च विवरण अवलोकन</p>
            </div>
          </div>
        </div>
        
        {/* Expenses List */}
        <div className="mt-4">
          {loading ? (
            <div className="bg-white rounded shadow p-8 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <span className="ml-2 text-gray-600">Loading expenses...</span>
            </div>
          ) : (
            <ExpensesList expenses={expenses} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpensesComponent;

