import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilter, setSearchFilter] = useState('studentName');
  const [transactions, setTransactions] = useState([]);

  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="p-4 bg-white border-b">
        <h1 className="text-xl font-semibold">Transactions</h1>
      </div>
      
      <div className="grid grid-cols-2 gap-4 p-4">
        {/* Student Fee Box */}
        <div className="flex items-center p-3 bg-white rounded-md shadow">
          <div className="p-2 mr-3 bg-yellow-100 rounded-full">
            <img src="/rupee-icon.png" alt="Rupee" className="w-6 h-6" />
          </div>
          <div>
            <p className="font-medium">Student Fee</p>
            <p className="text-sm text-gray-500">विद्यार्थी फी जमा करण्यासाठी</p>
          </div>
        </div>
        
        {/* Other Services Box */}
        <div className="flex items-center p-3 bg-white rounded-md shadow">
          <div className="p-2 mr-3 bg-yellow-100 rounded-full">
            <img src="/services-icon.png" alt="Services" className="w-6 h-6" />
          </div>
          <div>
            <p className="font-medium">Other Services</p>
            <p className="text-sm text-gray-500">इतर सुविधांच्या शुल्कासाठी</p>
          </div>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="p-4 bg-blue-400 mx-4 rounded-md">
        <div className="flex items-center">
          <span className="mr-2 text-white font-medium">Search</span>
          <input 
            type="text" 
            className="flex-grow px-3 py-1 rounded" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <div className="flex ml-4">
            <label className="mx-2 text-white">
              <input 
                type="radio" 
                name="searchFilter" 
                value="studentName" 
                checked={searchFilter === 'studentName'} 
                onChange={() => setSearchFilter('studentName')}
              />
              <span className="ml-1">Student Name</span>
            </label>
            
            <label className="mx-2 text-white">
              <input 
                type="radio" 
                name="searchFilter" 
                value="contactNo" 
                checked={searchFilter === 'contactNo'} 
                onChange={() => setSearchFilter('contactNo')}
              />
              <span className="ml-1">Contact No</span>
            </label>
            
            <label className="mx-2 text-white">
              <input 
                type="radio" 
                name="searchFilter" 
                value="course" 
                checked={searchFilter === 'course'} 
                onChange={() => setSearchFilter('course')}
              />
              <span className="ml-1">Course</span>
            </label>
          </div>
        </div>
      </div>
      
      {/* Hindi Text */}
      <div className="mx-4 my-2 text-red-500 text-sm">
        टीप: जावेष्ट माहित सर्च से वेगेळे करून लुत्पण्यासाठी कर्सर वर क्लिक करावे किंवा पुढे क्लिक करावे
      </div>
      
      {/* Transaction Table */}
      <div className="mx-4 bg-white rounded-md shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Admission ID</th>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Contact No.</th>
              <th className="p-2 text-left">Course</th>
              <th className="p-2 text-left">Batch</th>
              <th className="p-2 text-left">Fee</th>
              <th className="p-2 text-left">Due Amount</th>
              <th className="p-2 text-left">Amount Paid</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="9" className="p-4 text-center text-gray-500">No transactions found</td>
              </tr>
            ) : (
              transactions.map((transaction, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 cursor-pointer">
                  <td className="p-2">{transaction.admissionId}</td>
                  <td className="p-2">{transaction.id}</td>
                  <td className="p-2">{transaction.name}</td>
                  <td className="p-2">{transaction.contactNo}</td>
                  <td className="p-2">{transaction.course}</td>
                  <td className="p-2">{transaction.batch}</td>
                  <td className="p-2">{transaction.fee}</td>
                  <td className="p-2">{transaction.dueAmount}</td>
                  <td className="p-2">{transaction.amountPaid}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {/* Bottom Instruction */}
      <div className="mx-4 my-4 text-center text-blue-600 text-sm">
        For Transaction entry, please click on Table row Content or Hit Enter button to proceed
      </div>
    </div>
  );
};

export default Transactions;