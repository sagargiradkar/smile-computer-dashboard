import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import EnquiryForm from './components/enquiry/EnquiryForm';
import EnquiryList from './components/enquiry/EnquiryList';
import Admissions from './components/admissions/Admissions';
import Transactions from './components/transactions/Transactions';
import FeesReceipt from './components/transactions/FeesReceipt';
import AddExpense from './components/expenses/AddExpense';
import ExpensesList from './components/expenses/ExpensesList';
import Reports from './components/reports/Reports';
import AdminPanel from './components/admin/AdminPanel';
import Certificates from './components/certificates/Certificates';
import Marketing from './components/marketing/Marketing';
import Reminders from './components/reminders/Reminders';
import { AppProvider } from './contexts/AppContext';
import './index.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/enquiry/new" element={<EnquiryForm />} />
            <Route path="/enquiry/list" element={<EnquiryList />} />
          
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/transactions/fees" element={<FeesReceipt />} />
            <Route path="/expenses/add" element={<AddExpense />} />
            <Route path="/expenses/list" element={<ExpensesList />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;