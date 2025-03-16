import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Reports = () => {
  const [reportType, setReportType] = useState('dashboard');
  const [dateRange, setDateRange] = useState('week');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [includeSections, setIncludeSections] = useState({
    summary: true,
    earnings: true,
    expenses: true,
    admissions: true,
    courseDistribution: true,
    transactions: true
  });
  const [generatingReport, setGeneratingReport] = useState(false);
  const [reportPreview, setReportPreview] = useState(false);

  const dashboardData = {
    studentEnquiries: 0,
    admissions: 12,
    amountReceived: 23001,
    expenses: 59500,
    pendingAmount: 35999,
    netEarnings: -36499
  };

  const handleCheckboxChange = (section) => {
    setIncludeSections({
      ...includeSections,
      [section]: !includeSections[section]
    });
  };

  const generateReport = () => {
    setGeneratingReport(true);
    setTimeout(() => {
      setGeneratingReport(false);
      setReportPreview(true);
    }, 1500);
  };

  const downloadReport = () => {
    alert('Downloading report as PDF...');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Reports</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">Report Settings</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
              <select 
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="dashboard">Dashboard Summary</option>
                <option value="financial">Financial Report</option>
                <option value="admissions">Admissions Report</option>
                <option value="expenses">Expense Report</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <select 
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="day">Daily</option>
                <option value="week">Weekly</option>
                <option value="month">Monthly</option>
                <option value="quarter">Quarterly</option>
                <option value="year">Yearly</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
            {dateRange === 'custom' && (
              <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input 
                    type="date" 
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <input 
                    type="date" 
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
            )}
            <div className="mt-6">
              <button 
                onClick={generateReport}
                disabled={generatingReport}
                className={`w-full px-4 py-2 text-white font-medium rounded-md shadow-sm 
                  ${generatingReport ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                {generatingReport ? 'Generating...' : 'Generate Report'}
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          {reportPreview ? (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium border-b pb-2 mb-4">Report Preview</h2>
              <p className="text-gray-500">This is a preview of the generated report.</p>
              <button 
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 mt-4"
                onClick={downloadReport}
              >
                Download PDF
              </button>
            </div>
          ) : (
            <p className="text-gray-500 text-center">Select options and generate a report to preview.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;
