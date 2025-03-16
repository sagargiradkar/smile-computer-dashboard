import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState({
    enquiries: 0,
    admissions: 12,
    receivedAmount: 23001,
    expenses: 59500,
    pendingAmount: 35999,
    coursesData: [
      { name: 'MS-CIT', count: 11 },
      { name: 'Klic Diploma', count: 1 }
    ]
  });

  const [transactions, setTransactions] = useState([]);
  const [admissions, setAdmissions] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // Add new enquiry
  const addEnquiry = (enquiry) => {
    setEnquiries([...enquiries, { id: Date.now(), ...enquiry }]);
    setDashboardData({
      ...dashboardData,
      enquiries: dashboardData.enquiries + 1
    });
  };

  // Add new admission
  const addAdmission = (admission) => {
    setAdmissions([...admissions, { id: Date.now(), ...admission }]);
    setDashboardData({
      ...dashboardData,
      admissions: dashboardData.admissions + 1
    });
  };

  // Record fee payment
  const recordPayment = (payment) => {
    setTransactions([...transactions, { id: Date.now(), ...payment }]);
    setDashboardData({
      ...dashboardData,
      receivedAmount: dashboardData.receivedAmount + payment.amount,
      pendingAmount: dashboardData.pendingAmount - payment.amount
    });
  };

  // Add expense
  const addExpense = (expense) => {
    setExpenses([...expenses, { id: Date.now(), ...expense }]);
    setDashboardData({
      ...dashboardData,
      expenses: dashboardData.expenses + expense.amount
    });
  };

  const value = {
    dashboardData,
    transactions,
    admissions,
    enquiries,
    expenses,
    addEnquiry,
    addAdmission,
    recordPayment,
    addExpense
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};